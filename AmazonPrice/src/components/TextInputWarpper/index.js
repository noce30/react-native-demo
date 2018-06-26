import React, { Component } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-fa-icons";

export default class TextInputWrapper extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="search" style={{ fontSize: 30, color: "#00A4B4" }} />
        <View style={{ width: "100%", marginTop:7 }}>
          <TextInput
            underlineColorAndroid="transparent"            
            placeholder="What are you looking for?"
          />
        </View>
      </View>
    );
  }
}

const _screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: (_screenWidth * 5) / 8,
    height: 40,
    flexDirection: "row",
    paddingLeft: 5,
    alignItems: "center"
  }
});
