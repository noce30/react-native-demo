import React, { Component } from "react";
import { View } from "react-native";
import Search from "./components/Search";
import IconsLeft from "./components/IconsLeft";
import { styles } from "../styles";

export default class HeaderBottom extends Component {
  render() {
    return (
      <View style={styles.headerBottom}>
        <Search />
        <IconsLeft />
      </View>
    );
  }
}
