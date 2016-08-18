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
        fetch("olamundo-server.cloudapp.net/categories.json?category=Clothing", {method: "GET"})
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
      console.log('press');
      let data = {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'same-origin',
        body: JSON.stringify({
          email: "david.borohov@gmail.com",
          password: "olamundo1234",
        }),
        headers: {
          'Accept':       'application/json',
          'Content-Type': 'application/json',
          // 'X-CSRFToken':  cookie.load('csrftoken')
        }
      }
      return fetch('olamundo-server.cloudapp.net/users/sign_in', data)
              .then(response => response.json())  // promise
              .then(json => dispatch(receiveAppos(json)))
      }



      //      fetch("olamundo-server.cloudapp.net/users/sign_in",
      //       {method: "POST", body: JSON.stringify({
      //         user[email]: "david.borohov@gmail.com",
      //         user[password]: "olamundo1234",
      //       })
      //     })
      //      .then((response) => response.json())
      //      .then((responseData) => {
      //          AlertIOS.alert(
      //              "POST Response",
      //              "Response Body -> " + JSON.stringify(responseData.body)
      //          )
      //      })
      //      .done();
      //  }





    _onPressButtonPOST() {

      var youremail = 'david.borohov@gmail.com';
      var password = 'olamundo1234';

      //       user[password]: 'olamundo1234',

      fetch('olamundo-server.cloudapp.net/users/sign_in', {
  method: 'POST',
  // headers: {
  //   'Accept': 'application/json',
  //   'Content-Type': 'application/json',
  // },
  body: JSON.stringify({
    "user[email]": 'david.borohov@gmail.com',
    "user[password]": 'olamundo1234',
  })
})

      // var youremail = 'david.borohov@gmail.com';
      // var password = 'olamundo1234';
      // fetch("olamundo-server.cloudapp.net/users/sign_in",
      //
      //  {
      //    method: "POST",
      //
      //       body: JSON.stringify({
      //       user[email]: 'david.borohov@gmail.com',
      //       user[password]: 'olamundo1234',
      //       })
      //     })


    //     .then((response) => response.json())
    //     .then((responseData) => {
    //         AlertIOS.alert(
    //             "POST Response",
    //             "Response Body -> " + JSON.stringify(responseData.body)
    //      )
    //  })
    //  .done();
    // }

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
