import React, { Component } from "react";
import { View, Image } from "react-native";

export default class Logo extends Component {
  render() {
    return (
      <View>
        <Image
          style={{
            position: "absolute",
            left: 40,
            top: -40
          }}
          source={require("../../../../../../../assets/images/logo.png")}
        />
      </View>
    );
  }
}
