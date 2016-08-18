/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 //console.log('in Display '+ MyListKeyborad.renderRow.rowData.text);

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
} from 'react-native';

var Data = require('./Data');
var Speech = require('react-native-speech');
var MyListKeyborad = require('./MyListKeyborad');

var symbolsPress = []

class MyListDispaly extends Component {

  constructor(props) {
    super(props);
    //create a ListView Object
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


    this.state = {
      //declere what will be the data for the list
      dataSource: ds.cloneWithRows(Data.symbols),
    };
  }

    render() {
      this._startHandler
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
        voice: 'en-US'
      })
      // symbolsPress.push(rowData.id)
      // console.log(symbolsPress);

      console.log(rowData.id);
    }


    renderRow(rowData){
      return(
        <TouchableHighlight onPress={() => this._startHandler(rowData)}>
        <View style={styles.symbol}>
        <Image style={styles.image} source={rowData.image_require}/>
        <Text style={styles.welcome}>{rowData.text}</Text>
        </View>
      </TouchableHighlight>
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
  justifyContent: 'flex-start'
},

symbol:{
  alignItems: 'center',
  flexDirection: 'column'
},
  image: {
    width: 54,
    height: 54,
  },
  welcome: {
    fontSize: 12,
    textAlign: 'center',
    margin: 20,
    justifyContent: 'space-around',
  },
});

module.exports = MyListDispaly;
