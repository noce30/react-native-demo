import React, { Component } from "react";
import { View } from "react-native";
import Icon from "react-native-fa-icons";

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Icon
          onPress={this.props.openMenu}
          name="bars"
          style={{ fontSize: 30, color: "white" }}
        />
      </View>
    );
  }
}
