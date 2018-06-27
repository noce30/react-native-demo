import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class SmallProduct extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/small-product.png")}
          />
        </View>
        <View>
          <Text style={styles.coupon}>$1.00 off coupon</Text>
          <Text>Vicks ZzzQuil PURE Zzzs Melatonin ...</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: "#ffff",
    flexDirection: "row",
    padding: 5,
    marginBottom: 5,
    height: 60
  },
  imageContainer: {
    width: 40,
    marginLeft: 5,
  },
  infor: {},
  coupon: {
    color: "orange"
  }
});
