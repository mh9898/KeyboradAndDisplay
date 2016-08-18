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
  View
} from 'react-native';


var DataList = require('./DataList');
var IndexRequst2 = require('./IndexRequst2');

var MyListKeyborad = require('./MyListKeyborad')

var KeyboradAndDipaly = require('./Keyborad/KeyboradAndDipaly')
var KeyboradAndDipaly2 = require('./Keyborad/KeyboradAndDipaly2')
var KeyboradAndDipaly3 = require('./Keyborad/KeyboradAndDipaly3')
var KeyboradAndDipaly4 = require('./Keyborad/KeyboradAndDipaly4')

var KeyboradAndDipaly10 = require('./Keyborad/KeyboradAndDipaly10')
var KeyboradAndDipaly2C = require('./Keyborad/KeyboradAndDipaly2C')


var MyFlexKeyboradInput = require('./MyFlexKeyboradInput');

class SpeechSynthesizer extends Component {
  render() {
    return (
      <KeyboradAndDipaly2C></KeyboradAndDipaly2C>
    );
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

AppRegistry.registerComponent('SpeechSynthesizer', () => SpeechSynthesizer);
