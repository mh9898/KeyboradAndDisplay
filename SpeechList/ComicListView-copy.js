"use strict";


var crypto = require("crypto-js");


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


//var ComicDetail = require("./ComicDetailView");

var REQUEST_URL = 'http://gateway.marvel.com:80/v1/public/characters';

// this.public_key = '9a6a2e7e2ee1ff735a5d269bed263e7e';
// this.private_key = '6ebe068fe586aeb4c6a9003538560d873bc38dcb';


class ComicListView extends Component {

    constructor(props) {

        super(props);
        // var varPageSize = 1000;
        this.timestamp = 1;
        this.public_key = 'dd270622b0862dca7362941546acf4d1';
        this.private_key = 'd0ed8fc28f38b6ee3bf69002e7991a552e5bddda';
        this.state = {
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          }),
          loaded: false,
        };

        this.renderComic  = this.renderComic.bind(this);
        this.onComicPressed = this.onComicPressed.bind(this);
    }

    componentDidMount() {
      this.fetchData();

    }

      //results == comic
    fetchData() {
      var hash = crypto.MD5(this.timestamp+this.private_key+this.public_key);
      fetch(REQUEST_URL+'?ts='+this.timestamp+'&apikey='+this.public_key+'&hash='+hash)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
            loaded: true,
          });
        })
        .done();
    }

    renderLoadingView() {
      return (
        <View style={styles.container}>
          <Text>
            Loading movies...
          </Text>
        </View>
      )
    }

    render() {
      if (!this.state.loaded) {
        return this.renderLoadingView();
      }

      return (

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderComic.bind(this)}
          style={styles.listView}
          contentContainerStyle={styles.list}
        />


      );
    }
//  contentContainerStyle={styles.list}




                //comic is a cell that will go to the results dataSource
    renderComic(comic) {
      return (
        <TouchableHighlight onPress={() => this.onComicPressed(comic)}>
          <Image source={{uri: comic.thumbnail.path+'.jpg'}}
            style={styles.backgroundImage}>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{comic.name}</Text>
            <Text style={styles.available}>Disponibles: {comic.comics.available}</Text>
          </View>
      </Image>
      </TouchableHighlight>
      );
    }

    onComicPressed(comic){
      console.log('Choosing a comic: '+comic.name);
      this.props.navigator.push({
          name: 'Details',
          title: comic.name,
          passProps: {comic: comic},
      });
    }
};

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backgroundImage:{
    justifyContent: 'center',
     alignItems: 'center',
     alignSelf: 'stretch',
      height:200,
      width: 200,
  },
  // rightContainer: {
  //   backgroundColor:'rgba(52,52,52,0.5)',
  //   alignSelf: 'stretch',
  //   paddingTop:30,
  //   height: 150,
  //
  // },
  title: {
    fontSize: 12,
    marginBottom: 8,
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: 'rgba(52,52,52,0)',
  },
  available: {
    fontSize:12,
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor:'rgba(52,52,52,0)',
  },
  // listView: {
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //
  //   paddingTop: 64,
  //   marginBottom: 49,
  //
  //   //flexWrap: 'wrap'
  // },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  }
});

module.exports = ComicListView;
