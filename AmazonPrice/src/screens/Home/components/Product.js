import React, { Component } from "react";
import { View, Image } from "react-native";

export default class Product extends Component {
  render() {
    return (
      <View>
        <Image
          style={{ width: "100%" }}
          source={require("../../../assets/images/product.png")}
        />
      </View>
    );
  }
}
