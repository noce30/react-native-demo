import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import Button from "../../components/Button";
import { connect } from "react-redux";

class Wellcome extends Component {
  constructor(props) {
    super(props);
  }

  onPressLogin() {
    this.props.navigation.navigate("Login");
  }

  onPressSignUp() {
    this.props.navigation.navigate("SignUp");
  }

  render() {
    const logo = require("../../assets/images/logo.png");
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={logo} />
        </View>
        <View style={styles.loginWrapper}>
          <View style={styles.loginButton}>
            <Button
              buttonStyles={{
                backgroundColor: "#F85B52",
                borderColor: "#ffff",
                borderWidth: 1
              }}
              title="Login"
              onPress={this.onPressLogin.bind(this)}
            />
          </View>
          <Button title="Sign Up" onPress={this.onPressSignUp.bind(this)} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state
};

export default connect(mapStateToProps)(Wellcome);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F85B52",
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
    flex: 1,
    alignItems: "center"
  },
  loginButton: {
    width: "100%",
    marginBottom: 20
  }
});
