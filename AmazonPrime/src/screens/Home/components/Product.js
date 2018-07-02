import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const uri = `http://app.verybestusa.com/${this.props.imageUrl}`;
    return (
      <View style={styles.container}>
        <View>
          <Image
            resizeMode="contain"
            style={{ width: null, height: 100 }}
            source={{ uri: uri }}
          />
        </View>
        <View style={styles.descriptionView}>
          <Text multiline={true} style={styles.descriptionText}>
            {this.props.productName}
          </Text>
        </View>
        <View>
          <Text style={styles.categoryText}>{this.props.categoryName}</Text>
        </View>
      </View>
    );
  }
}

Product.propTypes = {
  imageUrl: PropTypes.string,
  productName: PropTypes.string,
  categporyName: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 20,
    borderBottomColor: "#D5DBDB",
    borderBottomWidth: 0.5
  },
  descriptionView: {
    justifyContent: "center",
    alignContent: "center"
  },
  descriptionText: {
    color: "#1A71BB"
  },
  categoryText: {
    fontStyle: "italic"
  }
});
