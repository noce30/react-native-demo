import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    const { title, onPress, buttonStyles, titleStyles } = this.props;
    return (
      <View style={{ width: "100%" }}>
        <TouchableOpacity
          style={[styles.buttonStyles, buttonStyles]}
          onPress={onPress}
          activeOpacity={0.8}
        >
          {this.props.children}
          <Text style={[styles.titleStyles, titleStyles]}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Button;

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyles: PropTypes.object,
  titleStyles: PropTypes.object
};

const styles = StyleSheet.create({
  buttonStyles: {
    height: 44,
    width: "100%",
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2ABD7E",
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: "row"
  },
  titleStyles: {
    fontSize: 14,
    color: "white",
    marginLeft: 5,
    marginRight: 5
  }
});
