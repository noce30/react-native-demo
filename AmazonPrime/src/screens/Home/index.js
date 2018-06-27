import { View, StyleSheet, Text } from "react-native";
import React from "react";
import Header from "./components/Header";
import DeliverInfor from "../../components/DeliverInfor";
import Advertising from "./components/Advertising";
import SmallProduct from "./components/SmallProduct";
import Product from "./components/Product";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.deliverInfor}>
        <DeliverInfor />
      </View>
      <View style={styles.advertising}>
        <Advertising />
      </View>
      <View>
        <SmallProduct/>
      </View>
      <View style={styles.product}>
        <Product/>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CFD3D3",
    flexDirection: "column"
  },
  header: {
    height: 125
  },
  product: {

  }
});
