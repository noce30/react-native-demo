import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-fa-icons";

export default class SubItem extends Component {
  render() {
    return (
        <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        {this.props.iconName && (
          <View style={styles.icon}>
            <Icon name={this.props.iconName} style={{ fontSize: 20 }} />
          </View>
        )}
        <View style={styles.textView}>
          <Text> {this.props.text} </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

SubItem.propTypes = {
  text: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#E6E6E6",
    borderBottomWidth: 1,
    flexDirection: "row",
    padding: 10
  },
  icon: {
    flex: 1
  },
  textView: {
    flex: 5
  }
});
