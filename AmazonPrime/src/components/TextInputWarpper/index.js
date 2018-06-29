import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-fa-icons";

export default class TextInputWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showIconDelete: false
    };
  }

  onInputChange(text) {
    this.props.onSearch();
    this.props.onQueryItems(text);
    this.setState({
      showIconDelete: true,
      value: text
    });
  }

  onIconDeleteClick() {
    this.setState({ value: "" });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconSearch}>
          <Icon
            name="search"
            style={{ fontSize: 20, color: "#00A4B4", fontWeight: "normal" }}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            onChangeText={text => {
              this.onInputChange.bind(this)(text);
            }}
            underlineColorAndroid="transparent"
            placeholder="What are you looking for?"
            value={this.state.value}
          />
        </View>
        {this.state.showIconDelete && (
          <View style={styles.iconDelete}>
            <Icon
              onPress={this.onIconDeleteClick.bind(this)}
              name="remove"
              style={{ fontSize: 20, color: "#00A4B4", fontWeight: "normal" }}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 40,
    flexDirection: "row",
    paddingLeft: 5,
    alignItems: "center"
  },
  input: {
    flex: 8
  },
  iconSearch: {
    flex: 1
  },
  iconDelete: {
    flex: 1,
    alignItems: "center"
  }
});
