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


var MyListDispaly = require('./MyListDispaly.js')

class MyGridDisplay extends Component {

  render() {
   return (

<View style={styles.keyborad}>
<ScrollView
  style={styles.sscroll}
  automaticallyAdjustInsets={false}
  horizontal={true}
  contentContainerStyle={styles.content}
>

    <View style={styles.card}>
      <MyListDispaly></MyListDispaly>
    </View>

</ScrollView>

</View>

   )
 }
}

const styles = StyleSheet.create({


  scroll: {
   flex: 1,
   backgroundColor: '#F5FCFF',
   flexDirection: 'row',
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
   width: 1500,
   height: 100,
   margin: 5,
   justifyContent: 'flex-start',

   //alignItems: 'center',
   //justifyContent: 'center',

 },
});

module.exports = MyGridDisplay;
