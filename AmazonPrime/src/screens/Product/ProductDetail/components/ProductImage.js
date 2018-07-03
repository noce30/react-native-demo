import React, { Component } from "react";
import { Image } from "react-native";

export default class ProductImage extends Component {
  render() {
    const uri = `http://app.verybestusa.com${this.props.imagePath}`;
    console.log(uri);
    return (
      <Image
        source={{ uri: uri }}
        resizeMode="contain"
        style={{ width: null, height: 100 }}
      />
    );
  }
}
