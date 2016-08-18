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


class KeyboradAndDipaly4 extends Component {

  constructor(props) {
    super(props);
    //create a ListView Object
    var ds = new ListView.DataSource({
           rowHasChanged: (row1, row2) => row1 !== row2,
       });
       this.state = {
           dataSource: ds.cloneWithRows(foods),
           db: foods,
       };
  }

  _renderRow(data, sectionID, rowID) {
				return (
						<TouchableHighlight
  							style={styles.buttonContainer}>
                <Text>{data.key}</Text>
            </TouchableHighlight>
        );
    }

    onCollapse(rowID: number) {
    console.log("rowID", rowID);
    var newArray = this.state.db.slice();
    newArray[rowID] = {
        key: newArray[rowID].key,
        details: newArray[rowID].details,
        isCollapsed: newArray[rowID].isCollapsed == false ? true : false,
    };
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newArray),
        db: newArray,
    });
}

    _renderHeader() {
    		return (<Text>This is some text. This is some text. This is some text. This is some text.</Text>);
  	}

  render() {
   return (
     <View
                		style={styles.container}>
                <View
                    style={styles.header}>
                    <Text>Header</Text>
                </View>
                  <ListView
                      style={styles.listViewContainer}
                      dataSource={this.state.dataSource}
                      renderRow={this._renderRow.bind(this)}
                      renderHeader={this._renderHeader.bind(this)}
                      initialListSize={14}/>
              </View>
   )
 }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    scrollViewContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
    },
    listViewContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
      	backgroundColor: "#EEE",
    },
    header: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#387ef5",
    },
});

module.exports = KeyboradAndDipaly4;
