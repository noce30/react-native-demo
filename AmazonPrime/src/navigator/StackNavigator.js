import { StackNavigator } from "react-navigation";
import { SideMenu } from "./DrawerNavigator";
import LoginScreen from "../screens/Login";
import WellcomeScreen from "../screens/Wellcome";
import SignUp from "../screens/SignUp";
import ForgotPassword from "../screens/ForgotPassword";

const RootNavigator = StackNavigator(
  {
    Home: {
      screen: SideMenu,
      navigationOptions: {
        header: null
      }
    },
    // Login: { screen: LoginScreen },
    // Wellcome: { screen: WellcomeScreen },
    // SignUp: { screen: SignUp },
    // ForgotPassword: { screen: ForgotPassword }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default RootNavigator;
