import database from '@react-native-firebase/database';
import {POKEMONS, REGIONS, TEAMS} from '../constants/api';

const pokedex = database();

export const getRegionsFromFirebase = async () => {
  const snapshot = await pokedex.ref(REGIONS).once('value');
  return snapshot.val();
};

export const storeRegionsToFirebase = regions => {
  pokedex.ref(REGIONS).set(regions);
};

export const getTeams = (userID, region, onSuccess, onError) => {
  pokedex
    .ref(`${TEAMS}/${region}/${userID}`)
    .once('value')
    .then(snapshot => {
      onSuccess(snapshot.val());
    })
    .catch(onError);
};

export const getPokemonsFromFirebase = async region => {
  const snapshot = await pokedex.ref(`${region}/${POKEMONS}`).once('value');
  return snapshot.val();
};

export const storePokemonsToFirebase = (region, pokemons) => {
  pokedex.ref(`${region}/${POKEMONS}`).set(pokemons);
};
