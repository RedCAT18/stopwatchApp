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
    backgroundColor: '#131d4f',
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#121c4e'
  },
  icon: {
    alignSelf: 'center',
    justifyContent: 'center'
  }
});

export default Button;
