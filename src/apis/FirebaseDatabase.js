import database from '@react-native-firebase/database';
import {REGIONS, TEAMS} from '../constants/api';

const pokedex = database();

export const getRegionsFromFirebase = async () => {
  const snapshot = await pokedex.ref(REGIONS).once('value');
  return snapshot.val();
};

export const storeRegionsToFirebase = regions => {
  pokedex.ref(REGIONS).set(regions);
};

export const getTeams = (region, onSuccess, onError) => {
  pokedex
    .ref(`${TEAMS}/${region}`)
    .once('value')
    .then(snapshot => {
      onSuccess(snapshot.val());
    })
    .catch(onError);
};
