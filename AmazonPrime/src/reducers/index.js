import { combineReducers } from "redux";
import loginReducer from "./Login";

const amazonPrime = combineReducers({
  login: loginReducer
});
export default amazonPrime;
