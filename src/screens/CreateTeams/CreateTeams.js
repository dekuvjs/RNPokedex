import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Text, View} from 'react-native';
import {storeTeamToFirebase} from '../../apis/FirebaseDatabase';
import {getPokemons} from '../../apis/Pokedex';
import Button from '../../components/Button/Button';
import ChoosePokemonModal from '../../components/ChoosePokemonModal/ChoosePokemonModal';
import EmptyList from '../../components/EmptyList/EmptyList';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import TeamItem from '../../components/TeamItem/TeamItem';
import {INSUFFICIENTPOKEMONS, TOOMANYPOKEMONS} from '../../constants/strings';
import withPokemonBackground from '../../HOC/withPokemonBackground';
import styles from './styles';

const CreateTeams = ({navigation, route}) => {
  const [pokemons, setPokemons] = useState([]);
  const [teamName, setTeamName] = useState('');
  const [pokemonTeamMembers, setpokemonTeamMembers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getPokemons(route.params.region, setPokemons);
  }, [route.params.region]);

  const onDeletePokemon = index => {
    const pokemonList = [...pokemonTeamMembers];
    pokemonList.splice(index, 1);
    setpokemonTeamMembers(pokemonList);
  };

  const onSave = () => {
    if (pokemonTeamMembers.length < 3) {
      Alert.alert('insufficient amount of pokemons ', INSUFFICIENTPOKEMONS);
    } else if (teamName === '') {
      Alert.alert('Add a team name', 'Please add a name to your team');
    } else {
      storeTeamToFirebase(route.params.region, pokemonTeamMembers, teamName);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Header
        text="Teams Creation"
        goBack={navigation.goBack}
        onSave={onSave}
      />
      <View style={styles.form}>
        <Input
          placeholder="Team name"
          value={teamName}
          onChangeText={setTeamName}
        />
        <Button
          text="Choose a pokemon"
          onPress={() => {
            if (pokemonTeamMembers.length === 6) {
              Alert.alert('Team Completed', TOOMANYPOKEMONS);
            } else {
              setModalVisible(true);
            }
          }}
        />

        <Text style={styles.text}>Pokemons</Text>

        <FlatList
          data={pokemonTeamMembers}
          renderItem={({item, index}) => (
            <TeamItem
              key={index}
              name={item.name}
              onDelete={() => onDeletePokemon(index)}
            />
          )}
          ListEmptyComponent={<EmptyList text={'pokemons'} />}
        />
      </View>

      <ChoosePokemonModal
        visible={modalVisible}
        setVisible={setModalVisible}
        pokemons={pokemons}
        addPokemonToTeam={teamMember => {
          setpokemonTeamMembers([...pokemonTeamMembers, teamMember]);
        }}
      />
    </View>
  );
};

export default withPokemonBackground(CreateTeams);
