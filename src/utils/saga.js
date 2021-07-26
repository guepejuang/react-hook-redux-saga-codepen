import { all, fork } from "redux-saga/effects";
import users from "../components/users/redux/saga";
import userForm from "../components/users/form/redux/saga";

function* rootSaga() {
  yield all([users].map(fork));
  yield all([userForm].map(fork));
}

export default rootSaga;
