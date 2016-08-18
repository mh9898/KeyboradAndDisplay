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
  View,
  ListView,
  ScrollView,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

var Data = require('./Data');
var Speech = require('react-native-speech');
var MyListDispaly = require('./MyListDispaly');


class MyListKeyborad extends Component {

    static get myLettersArrayFunc() {return myArray}
    static get myRowDataFunc() {return rowData}

  constructor(props) {
    super(props);
    //create a ListView Object
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      //declere what will be the data for the list
      dataSource: ds.cloneWithRows(Data.symbols)
    };
  }

    render() {
      return (
          <View style={styles.container}>
              <ListView
                  dataSource={this.state.dataSource} // call data form state
                  renderRow={this.renderRow.bind(this)} // call func for each render row
                  style={styles.listView}
                  contentContainerStyle={styles.list}
              />
          </View>
      );
    }

    _startHandler(rowData) {
      Speech.speak({
        text: rowData.text,
        voice: 'en-US',
      })
    }

    renderRow(rowData){

      return(

        <TouchableOpacity onPress={() => this._startHandler(rowData)}>
        <View style={styles.symbol}>
        <Image style={styles.image} source={rowData.image_require}/>
        <Text style={styles.welcome}>{rowData.text}</Text>
        </View>
      </TouchableOpacity>
      )
    }

  }

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

  list: {
  justifyContent: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
},

symbol:{
  alignItems: 'center',
  flexDirection: 'column'
},
  image: {
    width: 64,
    height: 64,
  },
  welcome: {
    fontSize: 16,
    textAlign: 'center',
    margin: 30,
    justifyContent: 'space-around',
  },
});

module.exports = MyListKeyborad;

// _startHandler() {return rowData}{
//   Speech.speak({
//     text: rowData.text,
//     voice: 'en-US'
//   })
// }

// static get onSymbolPressed() {return rowData} {
//   Speech.speak({
//     text: rowData.text,
//     voice: 'en-US'
//   })
// }
