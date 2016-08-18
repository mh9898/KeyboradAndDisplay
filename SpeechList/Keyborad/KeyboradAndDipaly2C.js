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
  TouchableOpacity,
  ScrollView,
} from 'react-native';

var Data = require('./Data');
var Speech = require('react-native-speech');


 let symbolsPress = []

class KeyboradAndDipaly2C extends Component {

  constructor(props) {
    super(props);

    this.state = {
      //create a ListView Object
      dataSourceKeyboard: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      dataSourceDisplay: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };

    this.keyboardSymbol  = this.keyboardSymbol.bind(this);
    this.RowDisplay  = this.RowDisplay.bind(this);
  }




  componentDidMount() {
      this.fetchData();
    }

    fetchData() {
          this.setState({
            //declere what will be the data for the list
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
          <View style={styles.KeyboradViewContainer}>

             {/* Yellow Display*/}
             <View style={styles.displayContiner}>
             <ListView
                 dataSource={this.state.dataSourceDisplay} // call data from state
                 renderRow={this.RowDisplay} // call func for each render row
                 style={styles.listView}
                 contentContainerStyle={styles.contentContainerListView}
             />
             </View>

             {/* Blue Keyborad*/}
             <View style={styles.keyboradContiner}>
              <ListView
                  dataSource={this.state.dataSourceKeyboard} // call data from state
                  renderRow={this.keyboardSymbol} // call func for each render row
                  style={styles.listView}
                  contentContainerStyle={styles.contentContainerListView}
              />
              </View>
          </View>

      </View>
   )
 }

 keyboardSymbol(rowData){
  //  console.log('keyboardSymbol' + rowData.image_require);
   return(
     <TouchableOpacity onPress={() => this._startHandler(rowData)}>
     <View style={styles.symbol}>
     <Image style={styles.image} source={rowData.image_require}/>
     <Text style={styles.welcome}>{rowData.text}</Text>
     </View>
   </TouchableOpacity>
   )
 }

 RowDisplay(rowData){
   //console.log(rowData.text);
   return(
     <View style={styles.symbol}>
         <Text style={styles.welcome}>{rowData.text}</Text>
     <Image style={styles.image} source={rowData.image_require}/>


     </View>

   )
 }

 _startHandler(rowData) {
   Speech.speak({
     text: rowData.text,
     voice: 'en-US',

   })

   symbolsPress.push(rowData)
     console.log('symbolsPress '+ symbolsPress[0].image_require)
     console.log('sData.symbols '+ Data.symbols[0].image_require)
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
  KeyboradViewContainer:{ //green
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

  contentContainerListView: {
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


module.exports = KeyboradAndDipaly2C;





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
