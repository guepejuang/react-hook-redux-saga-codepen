import { combineReducers } from "redux";
import users from "../components/users/redux/reducers";
import userForm from "../components/users/form/redux/reducers";

const rootReducer = combineReducers({
  users,
  userForm
});

export default rootReducer;
