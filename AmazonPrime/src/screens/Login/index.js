import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import Icon from "react-native-fa-icons";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  onPressLogin() {
    this.props.navigation.navigate("Home");
  }

  onForgotPassword() {
    this.props.navigation.navigate("ForgotPassword");
  }

  onConnectWith() {
    Alert.alert(
      "Information",
      "The feature will do late.",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }

  onPasswordChange(e){
    this.setState({password:e.target.value})
  }

  onUserNameChange(e){
    this.setState({userName:e.target.value})
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
            <TextInput
              style={styles.textField}
              keyboardType="email-address"
              placeholder="User Name"
              value={this.state.userName}
              onChange={this.onUserNameChange.bind(this)}
            />
            <TextInput
              style={styles.textField}
              secureTextEntry={true}
              placeholder="Password"
              value={this.state.password}
              onChange={this.onPasswordChange.bind(this)}
            />
          </View>
          <View style={styles.forgotPasswordView}>
            <TouchableOpacity onPress={this.onForgotPassword.bind(this)}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Button
              title="LOGIN"
              buttonStyles={{ backgroundColor: "#ffff" }}
              titleStyles={{ color: "#00A4B4", fontWeight: "bold" }}
              onPress={this.onPressLogin.bind(this)}
            />
          </View>
          <View style={styles.connectWithContainer}>
            <View style={styles.lineHorizontalView} />
            <View style={styles.connectWithView}>
              <Text>OR CONNECT WITH</Text>
            </View>
            <View style={styles.lineHorizontalView} />
            <View />
          </View>
          <View style={styles.connectWithWrapper}>
            <View style={{ width: 130, marginRight: 15 }}>
              <Button
                title="FACEBOOK"
                buttonStyles={{ backgroundColor: "#3262A4" }}
                onPress={this.onConnectWith}
              >
                <Icon
                  name="facebook-f"
                  style={{ color: "#ffff", fontSize: 25 }}
                />
              </Button>
            </View>
            <View style={{ width: 130 }}>
              <Button
                title="GOOGLE"
                buttonStyles={{ backgroundColor: "#D83828" }}
                onPress={this.onConnectWith}
              >
                <Icon name="google" style={{ color: "#ffff", fontSize: 25 }} />
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
