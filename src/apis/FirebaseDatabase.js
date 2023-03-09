import database from '@react-native-firebase/database';
import {REGIONS} from '../constants/api';

const pokedex = database();

export const getRegionsFromFirebase = async () => {
  const snapshot = await pokedex.ref(REGIONS).once('value');
  return snapshot.val();
};

export const storeRegionsToFirebase = regions => {
  pokedex.ref(REGIONS).set(regions);
};
