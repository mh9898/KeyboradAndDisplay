/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native';


var MyGridKeyborad = require('./MyGridKeyborad');
var MyGridDisplay = require('./MyGridDisplay');


class MyFlex extends Component {



  render() {
   return (

<View style={styles.container}>
{/* Purple Chat */}
<View style={styles.chat}>
</View>
{/* Green Input */}
<View style={styles.input}>
<MyGridDisplay></MyGridDisplay>
</View>
{/* Blue Keyborad */}
<View style={styles.keyborad}>
 <MyGridKeyborad></MyGridKeyborad>

</View>

</View>

   )
 }
}

const styles = StyleSheet.create({

  container:{
    alignItems: 'stretch',
    flex: 1,
  },

  chat: { //Purpule
    flex: 2,
    borderColor: 'purple',
    borderWidth: 2,

  },

  input: { //Green
    flex: 1,
    borderColor: 'green',
    borderWidth: 2,
  },

  keyborad: { //Blue
    flex: 3,
  },

  sc: {
   flex: 1,
   backgroundColor: '#F5FCFF',
   flexDirection: 'row',
  //  flexDirection: 'column',
   //paddingTop: 540,

   //flexWrap: 'wrap',
 },
 content: {
   marginTop: 20,
   //paddingHorizontal: 40,
    alignSelf: 'flex-end',
    alignItems: 'center',

   //flex: 1,
   //flexDirection: 'row',
 },
 card: {
   flex: 1,
   flexDirection: 'row',
   backgroundColor: '#ccc',
   width: 380,
   //height: 300,
    margin: 5,
   justifyContent: 'space-around',

   alignItems: 'center',
   //justifyContent: 'center',

 },
});

module.exports = MyFlex;
