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

// const CARD_PREVIEW_WIDTH = 20
// const CARD_MARGIN = 5;
// const CARD_WIDTH = Dimensions.get('window').width - (CARD_MARGIN + CARD_PREVIEW_WIDTH) * 2;

// class mygrid extends Component {
//
// }

var Grid = require('./Grid.js')
var MyList7 = require('./MyList7.js')

class ScrollerWithGrid extends Component {



  render() {
   return (

<View style={styles.container}>
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
       <Text>B</Text>
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

   )
 }
}

const styles = StyleSheet.create({

  container:{
    alignItems: 'center',
    flex: 1,
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
   backgroundColor: '#ccc',
   width: 300,
   height: 300,
   margin: 25,
   justifyContent: 'space-around',

   alignItems: 'center',
   //justifyContent: 'center',

 },
});

module.exports = ScrollerWithGrid;
