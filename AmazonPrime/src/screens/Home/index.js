import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "./components/Header";
import DeliverInfor from "../../components/DeliverInfor";
import Advertising from "./components/Advertising";
import SmallProduct from "./components/SmallProduct";
import Product from "./components/Product";
import Lists from "../../components/Lists";
import { getProducts } from "../../api/products";

class Home extends React.Component {
  state = { isExistItems: false, listItems: [], keyword: "", products: [] };

  payload = {
    pageSize: 10,
    pageIndex: 0,
    keyword: "",
    categoryId: null,
    locationIds: [],
    tagNames: ["specials"],
    dynamicPropertyFilters: {
      tags: "specials",
      searchKeyword: ""
    },
    searchByLocations: false
  };

  onQueryItems(keyword) {
    this.setState({ keyword: keyword });
    this.searchItems.bind(this)(keyword);
  }

  searchItems(keyword) {
    if (keyword === "") {
      return [];
    }

    this.payload = { ...this.payload, keyword: keyword };
    getProducts(this.payload, data => {
      this.setState({ products: data.Data });
    });

    const { products } = this.state;

    return products.filter(
      item =>
        item.ShortDescription.toLowerCase().search(keyword.toLowerCase()) >= 0
    );
  }

  componentDidMount() {
    getProducts(this.payload, data => {
      this.setState({ products: data.Data });
    });
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
          {this.state.products &&
            this.state.products.map(e => (
              <Product
                key={e.Id}
                imageUrl={e.Images[0].Url}
                productName={e.ShortDescription}
                categoryName={e.Category.Name}
              />
            ))}
        </View>
      </View>
    );
  }

  render() {
    const products = this.state.keyword !== "" ? this.state.products : [];
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header onQueryItems={this.onQueryItems.bind(this)} />
        </View>
        <ScrollView removeClippedSubviews={true}>
          {this.renderElement(products)}
        </ScrollView>
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
  product: {
    backgroundColor: "#ffff"
  }
});
