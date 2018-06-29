import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-fa-icons";

export default class ListItem extends Component {
  render() {
    const color = this.props.isRecentSearch
      ? { color: "#7D047D", fontWeight: "bold" }
      : null;
    return (
      <View style={styles.container}>
        {this.props.isRecentSearch && (
          <View style={styles.leftIcon}>
            <Icon name="remove" size={20} color="red" />
          </View>
        )}
        <View style={styles.content}>
          <Text style={[styles.contentText, color]}>{this.props.text}</Text>
          <Text style={styles.subText}>{this.props.subText}</Text>
        </View>
        <View style={styles.rightIcon}>
          <Icon name="long-arrow-up" size={20} color="red" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderBottomWidth: 0.5,
    borderColor: "#A7A9AA",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  contentText: {
    fontSize: 14,
    color: "#413E3E"
  },
  subText: {
    fontSize: 14,
    color: "#A5A5A5"
  },
  rightIcon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  leftIcon: {
    flex: 1
  },
  content: {
    flex: 8
  }
});
