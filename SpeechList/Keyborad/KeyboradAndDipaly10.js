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

let symbolsPress = [];

class KeyboradAndDipaly10 extends Component {

  constructor(props) {
    super(props);
    //create a ListView Object

    this.state = {
      //declere what will be the data for the list
      dataSourceKeyboard: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      dataSourceDisplay: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };

    this.renderSymbol  = this.renderSymbol.bind(this);
    this.displaySymbol  = this.displaySymbol.bind(this);
  }

  componentDidMount() {
      this.fetchData();
    }

    fetchData() {
          this.setState({
            dataSourceKeyboard : this.state.dataSourceKeyboard.cloneWithRows(Data.symbols),
            dataSourceDisplay: this.state.dataSourceDisplay.cloneWithRows(symbolsPress),
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
                 contentContainerStyle={styles.listKeyborad}
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
   //console.log(rowData.text);
   return(

     <View style={styles.symbol}>
     <Image style={styles.image} source={rowData.image_require}/>
     <Text style={styles.welcome}>{rowData}</Text>

     </View>

   )
 }

 _startHandler(rowData) {
   Speech.speak({
     text: rowData.text,
     voice: 'en-US',

   })

   //{"image_require": require("./Symbols/c.png")}
   symbolsPress.push(rowData.text)
   console.log('symbolsPress '+ symbolsPress)
   console.log('rowData '+ rowData)
   this.fetchData()
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


module.exports = KeyboradAndDipaly10;





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
