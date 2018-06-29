import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "./components/Header";
import DeliverInfor from "../../components/DeliverInfor";
import Advertising from "./components/Advertising";
import SmallProduct from "./components/SmallProduct";
import Product from "./components/Product";
import Lists from "../../components/Lists";
import { data } from "./data/ListItems";

class Home extends React.Component {
  state = { isExistItems: false, listItems: [], query: "" };

  onQueryItems(query) {
    this.setState({ query: query });
  }

  searchItems(query) {
    if (query === "") {
      return [];
    }

    const { listItems } = this.state;
    return listItems.filter(item => item.text.toLowerCase().search(query.toLowerCase()) >= 0);
  }

  componentDidMount() {
    this.setState({ listItems: data });
  }

  renderElement(listItems) {
    if (listItems.length > 0) return <Lists data={listItems} />;
    return (
      <View>
        <View style={styles.deliverInfor}>
          <DeliverInfor />
        </View>
        <View style={styles.advertising}>
          <Advertising />
        </View>
        <View>
          <SmallProduct />
        </View>
        <View style={styles.product}>
          <Product />
        </View>
      </View>
    );
  }

  render() {
    const { query } = this.state;
    const listItems = this.searchItems(query);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header onQueryItems={this.onQueryItems.bind(this)} />
        </View>
        <ScrollView>{this.renderElement(listItems)}</ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CFD3D3",
    flexDirection: "column"
  },
  header: {
    height: 115
  },
  product: {}
});
