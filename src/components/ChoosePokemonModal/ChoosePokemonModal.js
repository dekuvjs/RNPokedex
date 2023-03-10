import React, {useMemo, useState} from 'react';
import {FlatList, Modal, Text, TextInput, View} from 'react-native';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Input from '../Input/Input';
import styles from './styles';

const ChoosePokemonModal = ({
  pokemons,
  addPokemonToTeam,
  visible,
  setVisible,
}) => {
  const [text, setText] = useState('');

  const filteredPokemons = useMemo(() => {
    return pokemons.filter(item =>
      item.pokemon_species.name.toLowerCase().includes(text.toLowerCase()),
    );
  }, [pokemons, text]);

  return (
    <Modal
      style={styles.container}
      animationType="slide"
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <View style={styles.content}>
        <Header goBack={() => setVisible(false)} text="Choose your pokemon" />
        <Input
          placeholder="Search pokemon"
          onChangeText={value => setText(value)}
          value={text}
        />
        <FlatList
          data={filteredPokemons}
          renderItem={({item, index}) => (
            <Button
              text={item.pokemon_species.name}
              onPress={() => {
                addPokemonToTeam(item.pokemon_species);
                setVisible(false);
                setText('');
              }}
            />
          )}
          keyExtractor={(item, index) => item.pokemon_species.name + index}
        />
      </View>
    </Modal>
  );
};

export default ChoosePokemonModal;
