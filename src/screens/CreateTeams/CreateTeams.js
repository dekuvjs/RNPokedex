import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {getPokemons} from '../../apis/Pokedex';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import withPokemonBackground from '../../HOC/withPokemonBackground';
import styles from './styles';

const CreateTeams = ({navigation, route}) => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons(route.params.region, setPokemons);
  }, [route.params.region]);

  return (
    <View style={styles.container}>
      <Header text="Teams Creation" goBack={navigation.goBack} />
      <View style={styles.form}>
        <Input placeholder={'Team name'} />
        <Button text="Choose a pokemon" />
      </View>
    </View>
  );
};

export default withPokemonBackground(CreateTeams);
