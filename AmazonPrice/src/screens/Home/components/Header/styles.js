import { StyleSheet, Dimensions } from "react-native";

let _screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00A4B4",
    width: _screenWidth,
    flex: 1,
    flexDirection: "column",
    height: 100
  },
  headerTop: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    justifyContent: "space-between"
  },
  headerBottom: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 5,
    marginRight: 5
  }
});
