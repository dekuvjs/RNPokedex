import axios from 'axios';
import {
  getPokemonsFromFirebase,
  getRegionsFromFirebase,
  storePokemonsToFirebase,
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

export const getPokemons = async (region, onSuccess, onError) => {
  let pokemons = [];
  pokemons = await getPokemonsFromFirebase(region);
  if (pokemons?.length <= 0 || !pokemons) {
    axios
      .get(`https://pokeapi.co/api/v2/region/${region}`)
      .then(res => {
        axios
          .get(res.data.pokedexes[0].url)
          .then(response => {
            storePokemonsToFirebase(region, response.data.pokemon_entries);
            onSuccess(response.data.pokemon_entries);
          })
          .catch(onError);
      })
      .catch(onError);
  } else {
    onSuccess(pokemons);
  }
};
