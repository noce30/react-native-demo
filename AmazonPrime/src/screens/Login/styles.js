import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#00A4B4",
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
    flex: 2
  },
  textField: {
    color: "white",
    marginBottom: 10
  },
  forgotPasswordView: {
    alignItems: "flex-end",
    marginBottom: 10
  },
  forgotPasswordText: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "bold"
  },
  connectWithContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row"
  },
  connectWithView: {
    flex: 2,
    alignItems: 'center',
  },
  connectWithWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  lineHorizontalView: {
    height: 1,
    backgroundColor: "black",
    flex: 1
  }
});

export default styles;
