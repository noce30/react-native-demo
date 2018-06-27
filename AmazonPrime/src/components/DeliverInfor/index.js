import React, { Component } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import Icon from "react-native-fa-icons";

export default class DeliverInfor extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon
          name="map-marker"
          style={{ fontSize: 30, color: "white" }}
        />
        <Text style={{color: "#fff"}}>{'    '}Deliver to Kwangjae - Clarksville 21029</Text>
      </View>
    );
  }
}

let _screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00616D",
    padding: 5,
    width: _screenWidth,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
