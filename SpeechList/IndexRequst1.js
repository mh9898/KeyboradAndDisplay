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
  TouchableHighlight,
  View,
  AlertIOS,
} from 'react-native';

// var Speech = require('react-native-speech');
//
// class SpeechSynthesizer extends Component {
//   render() {

    //var Speech = require('react-native-speech');
    var MySpeech = require('./MySpeech');
    var ComicListView = require('./ComicListView');
    import api  from './util/api';


    class IndexRequst extends Component {

      _onPressButtonGET() {
        fetch("olamundo-server.cloudapp.net/users/sign_in?user[email]=mh9898@gmail.com&user[password]=123456", {method: "GET"})
        .then((response) => response.json())
        .then((responseData) => {
            AlertIOS.alert(
                "GET Response",
                "Search Query -> " + responseData.search
            )
        })
        .done();
    }

    //fetch("http://localhost:3000/test", {method: "POST", body: JSON.stringify({username: "nraboy", firstname: "Nic", lastname: "Raboy"})})

    //olamundo-server.cloudapp.net/users/sign_in?user[email]=youremail&user[password]=password

    _onPressButtonPOST() {

      var youremail = 'david.borohov@gmail.com';
      var password = 'olamundo1234';
      fetch("olamundo-server.cloudapp.net/users/sign_in?user[email]="+youremail+"&user[password]="+password,
      {method: "POST"})
     .then((response) => { console.log(response); response.json() })
     .then((responseData) => {
         AlertIOS.alert(
             "POST Response",
             "Response Body -> " + JSON.stringify(responseData.body)
         )
     })
     .done();
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButtonGET} style={styles.button}>
                    <Text>GET</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._onPressButtonPOST} style={styles.button}>
                    <Text>POST</Text>
                </TouchableHighlight>
            </View>
        );
    }
  }

  const styles = StyleSheet.create({
    container: {
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#F5FCFF',
   },
   button: {
       backgroundColor: '#eeeeee',
       padding: 10,
       marginRight: 5,
       marginLeft: 5,
   }
  });

module.exports = IndexRequst
