import React, { Component } from "react";
import { View, Image } from "react-native";

export default class Logo extends Component {
  render() {
    return (
      <View>
        <Image
          style={{
            height: 40,
            width: 130,
            position: "absolute",
            left: 40,
            top: -30
          }}
          source={require("../../../../../../../assets/images/logo.png")}
        />
      </View>
    );
  }
}
