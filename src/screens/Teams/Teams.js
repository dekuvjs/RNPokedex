import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {getRegions} from '../../apis/Pokedex';
import Header from '../../components/Header/Header';
import RegionButton from '../../components/RegionButton/RegionButton';
import TeamItem from '../../components/TeamItem/TeamItem';
import withPokemonBackground from '../../HOC/withPokemonBackground';
import styles from './styles';

const Teams = ({navigation, route}) => {
  const [teams, setTeams] = useState([1, 2, 3, 4, 5, 6,7,8,9,10]);

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
