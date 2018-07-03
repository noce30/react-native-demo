import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <HeaderTop openMenu={this.props.openMenu} />
        <HeaderBottom onQueryItems={this.props.onQueryItems} />
      </View>
    );
  }
}
