import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const withPokemonBackground = WrappedComponent => {
  const ComponentWithPokemonBackground = props => {
    return (
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={require('../../assets/images/LoginBackground.jpg')}>
        <WrappedComponent {...props} />
      </ImageBackground>
    );
  };

  return ComponentWithPokemonBackground;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default withPokemonBackground;
