import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform
} from 'react-native';

const Button = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPressOut={onPress}>
      <View style={styles.icon}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(12, 27, 32, 0.5)',
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 10,
    padding: 20
  },
  icon: {
    alignSelf: 'center',
    justifyContent: 'center'
  }
});

export default Button;
