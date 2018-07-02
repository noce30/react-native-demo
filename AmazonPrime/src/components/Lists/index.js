import React, { Component } from "react";
import { FlatList, View,Text } from "react-native";
import ListItem from "./component/ListItem";

export default class Lists extends Component {
  render() {
    console.log(this.props.data);
    return (
      <View>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => (
            <ListItem
              isRecentSearch={item.isRecentSearch}
              text={item.ShortDescription}
              subText={item.subText}
            />
          )}
          keyExtractor={(x,i) => i.toString()}
        />
      </View>
    );
  }
}
