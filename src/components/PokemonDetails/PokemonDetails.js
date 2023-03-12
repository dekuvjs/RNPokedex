import React, {useEffect, useState} from 'react';
import {View, Image, Text, Modal} from 'react-native';
import {getPokemon} from '../../apis/Pokedex';
import Header from '../Header/Header';
import styles from './styles';

const PokemonDetails = ({visible, setVisible, name}) => {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    if (name) {
      getPokemon(name, setPokemonData);
    }
  }, [name]);
  return (
    <Modal
      style={styles.container}
      animationType="slide"
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <View style={styles.content}>
        <Header goBack={() => setVisible(false)} text="Pokemon Details" />
        <View style={styles.imageContainer}>
          {pokemonData?.sprites?.front_default && (
            <Image
              style={styles.image}
              resizeMode="cover"
              defaultSource={require('../../../assets/images/NoImage.png')}
              source={{uri: pokemonData?.sprites?.front_default}}
            />
          )}
        </View>
        <View>
          <Text style={styles.text}>Name: {pokemonData.name}</Text>
          <Text style={styles.text}>Number: {pokemonData.id}</Text>
          <Text style={styles.text}>
            Type:{' '}
            {pokemonData.types?.map(type => type.type.name + ' ').join(',')}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default PokemonDetails;
