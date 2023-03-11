import React, {useState} from 'react';
import {View, TextInput, FlatList, Image, Text} from 'react-native';

const PokemonCard = () => {
  const [pokemonData, setPokemonData] = useState({});
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        source={{uri: pokemonData.image}}
        style={{width: '40%', aspectRatio: 1}}
      />
      <View style={{marginLeft: 8}}>
        <Text>Name: {pokemonData.name}</Text>
        <Text>Number: {pokemonData.number}</Text>
        <Text>Type: {pokemonData.type}</Text>
        <Text>Pokedex: {pokemonData.pokedex}</Text>
        <Text>Description: {pokemonData.description}</Text>
      </View>
    </View>
  );
};

export default PokemonCard;
