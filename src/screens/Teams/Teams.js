import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import auth from '@react-native-firebase/auth';

import {getTeams} from '../../apis/FirebaseDatabase';
import Header from '../../components/Header/Header';
import TeamItem from '../../components/TeamItem/TeamItem';
import withPokemonBackground from '../../HOC/withPokemonBackground';
import styles from './styles';
import AddMoreTeamsButton from '../../components/AddMoreTeamsButton/AddMoreTeamsButton';
import {CREATETEAMSSCREEN} from '../../constants/screens';
import EmptyList from '../../components/EmptyList/EmptyList';

const Teams = ({navigation, route}) => {
  const [teams, setTeams] = useState();

  useEffect(() => {
    const userID = auth().currentUser.uid;
    getTeams(userID, route.params.name, setTeams);
  }, [route.params.name]);

  return (
    <View style={styles.container}>
      <Header
        text={`Teams |  ${route.params.name}`}
        goBack={navigation.goBack}
      />
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={teams}
        ListEmptyComponent={<EmptyList text="teams" />}
        renderItem={({item, index}) => <TeamItem item={item} key={index} />}
      />

      <AddMoreTeamsButton
        onPress={() =>
          navigation.navigate(CREATETEAMSSCREEN, {region: route.params.name})
        }
      />
    </View>
  );
};

export default withPokemonBackground(Teams);
