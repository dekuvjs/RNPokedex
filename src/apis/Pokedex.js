import axios from 'axios';
import {
  getRegionsFromFirebase,
  storeRegionsToFirebase,
} from './FirebaseDatabase';

export const getRegions = async (onSuccess, onError) => {
  let regions = [];
  regions = await getRegionsFromFirebase();
  if (regions?.length <= 0 || !regions) {
    axios
      .get('https://pokeapi.co/api/v2/region/')
      .then(res => {
        storeRegionsToFirebase(res.data.results);
        onSuccess(res.data.results);
      })
      .catch(onError);
  } else {
    onSuccess(regions);
  }
};
