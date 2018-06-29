import React, { Component } from "react";
import { View } from "react-native";
import TextInputWrapper from "../../../../../../components/TextInputWarpper";

export default class Search extends Component {
  render() {
    return (
      <View style={{ flex: 3 }}>
        <TextInputWrapper
          onSearch={this.props.onSearch}
          onQueryItems={this.props.onQueryItems}
        />
      </View>
    );
  }
}
