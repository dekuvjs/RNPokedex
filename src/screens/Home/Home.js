import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {getRegions} from '../../apis/Pokedex';
import Header from '../../components/Header/Header';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import RegionButton from '../../components/RegionButton/RegionButton';
import {TEAMSSCREEN} from '../../constants/screens';
import withPokemonBackground from '../../HOC/withPokemonBackground';
import styles from './styles';

const Home = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    getRegions(value => {
      setRegions(value);
      setIsLoading(false);
    });
  }, []);

  const navigateToTeams = item => {
    navigation.navigate(TEAMSSCREEN, item);
  };
  return (
    <View style={styles.container}>
      <Header text="Select your region" />
      <FlatList
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnContent}
        data={regions}
        numColumns={2}
        renderItem={({item, index}) => (
          <RegionButton item={item} key={index} onPress={navigateToTeams} />
        )}
      />
      <LoadingModal visible={isLoading} />
    </View>
  );
};

export default withPokemonBackground(Home);
