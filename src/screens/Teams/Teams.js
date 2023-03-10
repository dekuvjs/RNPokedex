import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {getTeams} from '../../apis/FirebaseDatabase';
import Header from '../../components/Header/Header';
import TeamItem from '../../components/TeamItem/TeamItem';
import withPokemonBackground from '../../HOC/withPokemonBackground';
import styles from './styles';

const Teams = ({navigation, route}) => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams(route.params.name, setTeams);
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
        renderItem={({item, index}) => <TeamItem item={item} key={index} />}
      />
    </View>
  );
};

export default withPokemonBackground(Teams);
