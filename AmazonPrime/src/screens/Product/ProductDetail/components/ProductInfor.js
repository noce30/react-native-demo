import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import TextInfor from "./TextInfor";
import { formatMoney } from "../../../../utils/main";

export default class ProductInfor extends Component {
  render() {
    return (
      <View>
        <Text style={styles.name}>{this.props.name}</Text>
        <TextInfor title="Item Whole Code" text={this.props.itemCode} />
        <TextInfor title="Item Upc" text={this.props.itemUpc} />
        <TextInfor
          title="Unit Price"
          text={`$${formatMoney(this.props.unitPrice)}`}
        />
        <TextInfor title="Pk Per Case" text={this.props.pkPerCase} />
        <TextInfor
          title="Total Price"
          text={`$${formatMoney(this.props.totalPrice)}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    color: "#575A5B",
    marginBottom: 10
  },
  textInfor: {
    color: "#1A71BB",
    borderBottomColor: "#ddd",
    borderBottomWidth: 0.5,
    padding: 5
  }
});
