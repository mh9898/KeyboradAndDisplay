/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ListView,
} from 'react-native';


  var lettersToSpeak = ['A','B','C','D'];

  var A = 'A';

    var Speech = require('react-native-speech');

    class MySpeech extends Component {

      _startHandler() {
        Speech.speak({
          text: 'React Native Speech is awesome!  I\'m going to use it in my next project.',
          voice: 'en-US'
        })
        .then(started => {
          console.log('Speech started');
        })
        .catch(error => {
          console.log('You\'ve already started a speech instance.');
        });
      }

      _FirstTextHandler() {
        Speech.speak({
          text: 'First Text',
          voice: 'en-US'
        })
        .then(started => {
          console.log('Speech started');
        })
        .catch(error => {
          console.log('You\'ve already started a speech instance.');
        });
      }

      _pauseHandler() {
        Speech.pause();
      }

      _resumeHandler() {
        Speech.resume();
      }

      _stopHandler() {
        Speech.stop();
      }

      render() {
        return (
          <View>
          <TouchableHighlight onPress={this._startHandler}>
            <Text style={styles.welcome}>
            Speak
            </Text>
          </TouchableHighlight>

            <TouchableHighlight onPress={this._pauseHandler}>
              <Text style={styles.welcome}>
              Pause
              </Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={this._resumeHandler}>
              <Text style={styles.welcome}>
              Resume
              </Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={this._stopHandler}>
              <Text style={styles.welcome}>
              Stop
              </Text>
            </TouchableHighlight>
            <View>
            <TouchableHighlight onPress={this._FirstTextHandler}>
            <Text>
            {lettersToSpeak[0]}
            {lettersToSpeak[1]}
            </Text>
            </TouchableHighlight>
            </View>
          </View>
        )
      }
    }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

module.exports = MySpeech;
