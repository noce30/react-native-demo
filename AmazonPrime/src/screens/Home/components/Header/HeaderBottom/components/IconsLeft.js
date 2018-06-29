import React, { Component } from "react";
import { View } from "react-native";
import Icon from "react-native-fa-icons";

export default class IconsLeft extends Component {
  render() {
    return (
      <View
        style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}
      >
        <Icon
          name="camera"
          style={{ fontSize: 30, color: "white", marginRight: 10 }}
        />
        <Icon name="circle-o" style={{ fontSize: 30, color: "white" }} />
      </View>
    );
  }
}
