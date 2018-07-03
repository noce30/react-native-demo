import React, { Component } from "react";
import { View, Text } from "react-native";

import Menu from "./components/Menu";
import Logo from "./components/Logo";

export default class Right extends Component {
  render() {
    return (
      <View>
        <Menu openMenu={this.props.openMenu} />
        <Logo />
      </View>
    );
  }
}
