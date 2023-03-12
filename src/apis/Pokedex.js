import axios from 'axios';
import {reportError} from '../helpers/Crashlytics';
import {
  getPokemonsFromFirebase,
  getRegionsFromFirebase,
  storePokemonsToFirebase,
  storeRegionsToFirebase,
} from './FirebaseDatabase';

// DISCLAIMER: TO SHOW OFF MY SKILL (HOW HUMBLE OF MY XD )AND TO GO ALONG WITH THE POKEAPI RULES,
// MOST OF THE VALUES ARE STORE IN FIREBASE.

export const getRegions = async onSuccess => {
  let regions = [];
  regions = await getRegionsFromFirebase();
  if (regions?.length <= 0 || !regions) {
    axios
      .get('https://pokeapi.co/api/v2/region/')
      .then(res => {
        storeRegionsToFirebase(res.data.results);
        onSuccess(res.data.results);
      })
      .catch(reportError);
  } else {
    onSuccess(regions);
  }
};

export const getPokemons = async (region, onSuccess) => {
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
          .catch(reportError);
      })
      .catch(reportError);
  } else {
    onSuccess(pokemons);
  }
};

export const getPokemon = (name, onSuccess) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => {
      onSuccess(res.data);
    })
    .catch(reportError);
};
