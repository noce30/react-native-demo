import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/Home";
import LoginScreen from "../screens/Login";

const RootNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default RootNavigator;
