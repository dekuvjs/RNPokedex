import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {getRegions} from '../../apis/Pokedex';

const Home = () => {
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    getRegions(setRegions);
  }, []);
  return <View />;
};

export default Home;
