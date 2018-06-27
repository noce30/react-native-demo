import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  onPressLogin() {
    console.log('vo')
    console.log(this.props.navigation)
    this.props.navigation.navigate("Home");
  }

  render() {
    const logo = require("../../assets/images/logo.png");
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={logo} />
        </View>
        <View style={styles.loginWrapper}>
          <View>
            <TextInput style={styles.textField} placeholder="User Name" />
            <TextInput style={styles.textField} placeholder="Password" />
          </View>
          <View>
            <Button title="Login" onPress={this.onPressLogin.bind(this)} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#00A4B4",
    width: "100%",
    height: "100%",
    padding: 30
  },
  logo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  loginWrapper: {
    flex: 2
  },
  textField: {
    color: "white",
    marginBottom: 20
  }
});
