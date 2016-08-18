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



var MyListKeyborad = require('./MyListKeyborad.js')

class MyGridKeyborad extends Component {

  render() {
   return (

<View style={styles.keyborad}>

<ScrollView
  style={styles.scroller}
  automaticallyAdjustInsets={false}
  horizontal={true}
  contentContainerStyle={styles.content}
>
    <View style={styles.card}>
      <MyListKeyborad></MyListKeyborad>
    </View>
    <View style={styles.card}>
    <Text>--></Text>
      <MyListKeyborad></MyListKeyborad>
    </View>
    <View style={styles.card}>
    <Text>--></Text>
      <Text>C</Text>
    </View>

</ScrollView>

</View>

   )
 }
}

const styles = StyleSheet.create({


  keyborad: { //Blue
    flex: 3,
  },

  scroller: {
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
   //backgroundColor: '#ccc',
  //  borderColor: 'blue',
  //  borderWidth: 2,
   width: 370,
   //height: 300,

   margin: 5,
   justifyContent: 'space-around',

   alignItems: 'center',
   //justifyContent: 'center',

 },
});

module.exports = MyGridKeyborad;
