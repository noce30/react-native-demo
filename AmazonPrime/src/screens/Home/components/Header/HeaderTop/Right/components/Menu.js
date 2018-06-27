import React, { Component } from "react";
import { View } from "react-native";
import Icon from "react-native-fa-icons";

export default class Menu extends Component {
  render() {
    return (
      <View>
        <Icon name="bars" style={{ fontSize: 30, color: "white" }} />
      </View>
    );
  }
}
