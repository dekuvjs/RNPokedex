import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import auth from '@react-native-firebase/auth';

import {getTeams, removeTeamFromFirebase} from '../../apis/FirebaseDatabase';
import Header from '../../components/Header/Header';
import TeamItem from '../../components/TeamItem/TeamItem';
import withPokemonBackground from '../../HOC/withPokemonBackground';
import styles from './styles';
import AddMoreTeamsButton from '../../components/AddMoreTeamsButton/AddMoreTeamsButton';
import {CREATETEAMSSCREEN} from '../../constants/screens';
import EmptyList from '../../components/EmptyList/EmptyList';
import {getPokemons} from '../../apis/Pokedex';

const Teams = ({navigation, route}) => {
  const [teams, setTeams] = useState();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const userID = auth().currentUser.uid;
    getTeams(userID, route.params.name, setTeams);
    getPokemons(route.params.name, setPokemons);
  }, [route.params.name]);

  const navigateToTeamsDetails = team => {
    navigation.navigate(CREATETEAMSSCREEN, {
      title: team.name,
      teamMenbers: team.pokemons,
      region: route.params.name,
      pokemons: pokemons,
    });
  };

  return (
    <View style={styles.container}>
      <Header
        text={`Teams |  ${route.params.name}`}
        goBack={navigation.goBack}
      />
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={teams}
        keyExtractor={(item, index) => item.name + index}
        ListEmptyComponent={<EmptyList text="teams" />}
        renderItem={({item}) => (
          <TeamItem
            name={item.name}
            onEdit={() => navigateToTeamsDetails(item)}
            onPress={() => navigateToTeamsDetails(item)}
            onDelete={() => {
              removeTeamFromFirebase(route.params.name, item.name);
            }}
          />
        )}
      />

      <AddMoreTeamsButton
        onPress={() =>
          navigation.navigate(CREATETEAMSSCREEN, {
            region: route.params.name,
            pokemons: pokemons,
          })
        }
      />
    </View>
  );
};

export default withPokemonBackground(Teams);
