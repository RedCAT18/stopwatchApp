import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import Button from '../Button';

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    console.log(nextProps);
    console.log(currentProps);
  }

  _toggleTimer = () => {
    this.props.isPlaying ? this.props.pauseTimer() : this.props.startTimer();
  };

  _initialTimer = () => {
    this.props.isPlaying && !this.props.isFinish
      ? this.props.stopTimer()
      : null;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.numbers}>
          <Text style={styles.bigText}>00:00</Text>
        </View>
        <View style={styles.places}>
          <Button onPress={this._toggleTimer}>
            {this.props.isPlaying ? (
              <FontAwesome name="pause-circle-o" size={100} color="#fff" />
            ) : (
              <FontAwesome name="play-circle-o" size={100} color="#fff" />
            )}
          </Button>
          <Button onPress={this._initialTimer}>
            <FontAwesome name="stop-circle-o" size={100} color="#fff" />
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333366'
  },
  numbers: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bigText: {
    fontSize: 120,
    color: '#fff',
    ...Platform.select({
      ios: {
        fontWeight: '100'
      },
      android: {
        fontFamily: 'sans-serif-thin'
      }
    })
  },
  places: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 40
  }
});

export default Timer;
