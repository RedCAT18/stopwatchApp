import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native';

import { FontAwesome, Foundation } from '@expo/vector-icons';
import Button from '../Button';

function setTime(time) {
  //change time format
  //if min or sec is smaller than 10, attach '0' in front of the number
  //1. minutes
  let min = Math.floor(time / 60);
  min = min < 10 ? '0' + min : min;
  //2. seconds
  let sec = parseInt(time % 60, 10);
  sec = sec < 10 ? '0' + sec : sec;
  return min + ' : ' + sec;
}

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    //when app is playing, counting seconds is done at every second, unless it stops counting.
    if (nextProps.isPlaying && !currentProps.isPlaying) {
      const counter = setInterval(() => {
        currentProps.countSecond();
      }, 1000);
      this.setState({ counter });
    } else if (!nextProps.isPlaying && currentProps.isPlaying) {
      clearInterval(this.state.counter);
    }
    // console.log(currentProps);
  }

  _toggleTimer = () => {
    this.props.isPlaying ? this.props.pauseTimer() : this.props.startTimer();
  };

  _initialTimer = () => {
    this.props.isPlaying || !this.props.isFinish
      ? this.props.stopTimer()
      : null;
  };

  render() {
    const { elapsedTime } = this.props;
    return (
      <ImageBackground
        source={require('../../assets/astro.jpg')}
        style={styles.container}
      >
        <StatusBar barStyle="dark-content" />
        <View style={styles.titleArea}>
          <Text style={styles.title}>Starwatch</Text>
        </View>
        <View style={styles.numbers}>
          <Text style={styles.bigText}>{setTime(elapsedTime)}</Text>
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
            <Foundation name="refresh" size={100} color="#fff" />
          </Button>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333366'
  },
  titleArea: {
    alignItems: 'center',
    padding: 10,
    marginTop: 40
  },
  title: {
    color: '#fff',
    fontSize: 36,
    ...Platform.select({
      ios: {
        fontWeight: '100'
      },
      android: {
        fontFamily: 'sans-serif-thin'
      }
    })
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
