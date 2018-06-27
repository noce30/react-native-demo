/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
        {/* <Header />
        <View style={styles.welcome}>
          <DeliverInfor />
        </View>
        <View style={styles.instructions}>
          <Advertising />
        </View>
        <Text style={styles.instructions}>{instructions}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    flex: 1,
    margin: 10
  },
  instructions: {
    flex: 1,
    marginBottom: 5
  }
});
