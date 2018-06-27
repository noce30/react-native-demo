import React, { Component } from "react";
import { View } from "react-native";
import Icon from "react-native-fa-icons";

export default class IconsLeft extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row',}}>
        <Icon
          name="camera"
          style={{ fontSize: 30, color: "white", marginRight: 10, }}
          allowFontScaling={true}
        />
        <Icon
          name="circle-o"
          style={{ fontSize: 30, color: "white" }}
          allowFontScaling={true}
        />
      </View>
    );
  }
}
