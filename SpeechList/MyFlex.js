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


var Grid = require('./Grid.js')
var MyList7 = require('./MyList7.js')

class MyFlex extends Component {



  render() {
   return (

<View style={styles.container}>
{/* Purple Chat */}
<View style={styles.chat}>
</View>
{/* Green Input */}
<View style={styles.input}>
</View>
{/* Blue Keyborad */}
<View style={styles.keyborad}>
<ScrollView
  style={styles.sc}
  automaticallyAdjustInsets={false}
  horizontal={true}
  contentContainerStyle={styles.content}
>
    <View style={styles.card}>
      <MyList7></MyList7>
    </View>
    <View style={styles.card}>
      <MyList7></MyList7>
    </View>
    <View style={styles.card}>
      <Text>C</Text>
    </View>
    <View style={styles.card}>
      <Text>D</Text>
    </View>
    <View style={styles.card}>
      <Text>E</Text>
    </View>
    <View style={styles.card}>
      <Text>F</Text>
    </View>
    <View style={styles.card}>
      <Text>G</Text>
    </View>
    <View style={styles.card}>
      <Text>H</Text>
    </View>
</ScrollView>

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
