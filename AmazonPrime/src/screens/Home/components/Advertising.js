import React, { Component } from "react";
import { View, ImageBackground } from "react-native";

export default class Advertising extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          style={{ width: "100%", height: 100 }}
          source={{
            uri:
              "http://app.verybestusa.com/upload.api/Media/app.verybestusa.com/20170919-100731-banner_final.png"
          }}
        />
      </View>
    );
  }
}
