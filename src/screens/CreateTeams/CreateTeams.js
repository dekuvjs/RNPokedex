import React, {useState} from 'react';
import {View} from 'react-native';
import Header from '../../components/Header/Header';
import withPokemonBackground from '../../HOC/withPokemonBackground';
import styles from './styles';

const CreateTeams = ({navigation, route}) => {
  const [teams, setTeams] = useState([]);

  return (
    <View style={styles.container}>
      <Header text="Teams Creation" goBack={navigation.goBack} />
    </View>
  );
};

export default withPokemonBackground(CreateTeams);
