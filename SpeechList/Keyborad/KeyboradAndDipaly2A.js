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

var Data = require('./Data');
var Speech = require('react-native-speech');

let names = [ 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin']

let symbolsPress = [];

class KeyboradAndDipaly2A extends Component {

  constructor(props) {
    super(props);
    //create a ListView Object

    this.state = {
      //declere what will be the data for the list
      dataSourceKeyborad: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      dataSourceDisplay: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };

    this.renderSymbol  = this.renderSymbol.bind(this);
    this.displaySymbol  = this.displaySymbol.bind(this);
  }

  componentWillReceiveProps() {
      this.fetchData();
    }

    fetchData() {
          this.setState({
            dataSourceDisplay: this.state.dataSourceDisplay.cloneWithRows(Data.symbols),
            dataSourceKeyboard: this.state.dataSourceKeyborad.cloneWithRows(Data.symbols),
            loaded: true,
          });
    }

  render() {
   return (
     <View style={styles.container}>
       {/* Purple Chat */}
       <View style={styles.chat}>
       </View>
       {/* Green Keyborad and Display */}
          <View style={styles.listViewContainer}>

             {/* Yellow Display*/}
             <View style={styles.displayContiner}>
             <ListView
                 dataSource={this.state.dataSourceDisplay} // call data form state
                 renderRow={this.displaySymbol} // call func for each render row
                 style={styles.listView}
             />
             </View>

             {/* Blue Keyborad*/}
             <View style={styles.keyboradContiner}>
              <ListView
                  dataSource={this.state.dataSourceKeyboard} // call data form state
                  renderRow={this.renderSymbol} // call func for each render row
                  style={styles.listView}
                  contentContainerStyle={styles.listKeyborad}
              />
              </View>
          </View>

      </View>
   )
 }

 renderSymbol(rowData){

   return(
     <TouchableHighlight onPress={() => this._startHandler(rowData)} underlayColor={'gray'}>
     <View style={styles.symbol}>
     <Image style={styles.image} source={rowData.image_require}/>
     <Text style={styles.welcome}>{rowData.text}</Text>
     </View>
   </TouchableHighlight>
   )
 }

 displaySymbol(rowData){

   return(
     <TouchableHighlight onPress={() => this._startHandler(rowData)} underlayColor={'gray'}>
     <View style={styles.symbol}>
     <Image style={styles.image} source={rowData.image_require}/>
     <Text style={styles.welcome}>{rowData.text}</Text>
     </View>
   </TouchableHighlight>

   )
 }

 _startHandler(rowData) {
   Speech.speak({
     text: rowData.text,
     voice: 'en-US',

   })
   symbolsPress.push(rowData.text)
   console.log('symbolsPress '+ symbolsPress)
   //this.fetchData()
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
  listViewContainer:{ //green
    flex: 3,
    borderColor: 'green',
    borderWidth: 2,
  },
  displayContiner: { //Yellow
    flex: 1.5,
    borderColor: 'yellow',
    borderWidth: 2,
  },

  keyboradContiner: { //blue
    flex: 4,
    borderColor: 'blue',
    borderWidth: 2,
  },

  listDisplay: {
  justifyContent: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
  },

  listKeyborad: {
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


module.exports = KeyboradAndDipaly2A;





// renderRowDisplay(rowData){
//
//   return(
//     <TouchableHighlight onPress={() => this._startHandler(rowData)} underlayColor={'gray'}>
//     <View style={styles.symbol}>
//     <Image style={styles.image} source={rowData.image_require}/>
//     <Text style={styles.welcome}>{rowData.id}</Text>
//     </View>
//   </TouchableHighlight>
//   )
// }
