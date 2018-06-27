/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";
import StackNavigator from "./src/navigator/StackNavigator";

export default class App extends Component {
  render() {
    return <StackNavigator />;
  }
}
