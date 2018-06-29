import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "./component/ListItem";
import { data } from "./MockData";

export default class Lists extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => (
            <ListItem
              isRecentSearch={item.isRecentSearch}
              text={item.text}
              subText={item.subText}
            />
          )}
          keyExtractor={item => item.key}
        />
      </View>
    );
  }
}
