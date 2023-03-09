import axios from 'axios';
import {getRegionsFromFirebase} from './FirebaseDatabase';

export const getRegions = async () => {
  let regions = [];

  if (regions?.length <= 0) {
    regions = await axios.get('https://pokeapi.co/api/v2/pokedex/4/');
    console.log(regions);
  }
};
