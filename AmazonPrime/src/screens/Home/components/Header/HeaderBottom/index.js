import React, { Component } from "react";
import { View } from "react-native";
import Search from "./components/Search";
import IconsLeft from "./components/IconsLeft";
import { styles } from "../styles";

export default class HeaderBottom extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowRightIcons: true };
  }

  onSearch() {
    this.setState({ isShowRightIcons: false });
  }

  render() {
    return (
      <View style={styles.headerBottom}>
        <Search
          onSearch={this.onSearch.bind(this)}
          onQueryItems={this.props.onQueryItems}
        />
        {this.state.isShowRightIcons && <IconsLeft />}
      </View>
    );
  }
}
