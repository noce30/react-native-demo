import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/Home";
import LoginScreen from "../screens/Login";
import WellcomeScreen from "../screens/Wellcome";
import SignUp from "../screens/SignUp";
import ForgotPassword from "../screens/ForgotPassword";

const RootNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Wellcome: WellcomeScreen,
    SignUp: SignUp,
    ForgotPassword: ForgotPassword
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default RootNavigator;
