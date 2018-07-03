import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class TextInfor extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.textColor}>{this.props.title} </Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.textColor}>{this.props.text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 0.5,
    flexDirection: "row",
    padding: 5
  },
  title: {
    flex: 1
  },
  text: {
    flex: 1
  },
  textColor: {
    color: "#1A71BB"
  }
});
