import database from '@react-native-firebase/database';

const pokedex = database().ref('pokedex');

export const getRegionsFromFirebase = () => {
  pokedex
    .once('regions')
    .then(snapshot => {
      return snapshot.val();
    })
    .catch(error => {
      console.log(error);
    });
};
