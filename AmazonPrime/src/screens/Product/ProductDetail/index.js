import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ProductImage from "./components/ProductImage";
import ProductInfor from "./components/ProductInfor";
import { getProductDetails } from "../../../api/products";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {}, loadedData: false };
  }

  async componentWillMount() {
    let data = await getProductDetails(3076);
    this.setState({
      product: data,
      loadedData: true
    });
  }

  render() {
    if (!this.state.loadedData) {
      return null;
    }

    const imagePath = this.state.product.Images[0].Url;
    const {
      ShortDescription,
      Upc,
      UnitUpc,
      UnitPrice,
      Price
    } = this.state.product;

    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <ProductImage imagePath={imagePath} />
        </View>
        <View style={styles.infor}>
          <ProductInfor
            name={ShortDescription}
            itemCode={Upc}
            itemUpc={UnitUpc}
            unitPrice={UnitPrice}
            pkPerCase={17}
            totalPrice={Price}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection: "column"
  },
  image: {
    flex: 1
  },
  infor: {
    flex: 2,
    padding: 10
  }
});
