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

    var REQUEST_URL = 'http://olamundo-server.cloudapp.net/users/sign_in?';

    var email = 'david.borohov@gmail.com'
    var password = 'olamundo1234'


    class IndexRequst2 extends Component {


      _onPressButtonPOST() {
        fetch(REQUEST_URL+'users/sign_in',{
          method: 'POST',

          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },

          body:JSON.stringify(
            {
            "user": {
               email: email,
               password: password
             }
          })
        })
          .then((response) => response.json())
          .then((responseData) => {
              console.log(responseData);
          })
          .done();
        }

    _onPressButtonGET() {
    return fetch("http://olamundo-server.cloudapp.net/categories.json?category=Clothing")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        return responseJson;

      })
      .catch((error) => {
        console.error(error);
      });
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

module.exports = IndexRequst2
