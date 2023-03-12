import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import colors from '../../constants/colors';

import styles from './styles';

const LoadingModal = ({visible}) => {
  return (
    <Modal style={styles.container} animationType="fade" visible={visible}>
      <View style={styles.content}>
        <ActivityIndicator size={30} color={colors.white} />
      </View>
    </Modal>
  );
};

export default LoadingModal;
