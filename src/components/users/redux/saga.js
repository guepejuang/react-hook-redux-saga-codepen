import { call, put, takeLatest } from "redux-saga/effects";
import type from "./types";
import action from "./actions";
import axios from "../../../utils/axios";

const endpoint = "/users";
function* fetchUsers() {
  const data = yield call(axios.request, {
    url: `${endpoint}`
  });
  yield put(action.fetchUsers(data));
}
function* createUser(payload) {
  yield call(axios.request, {
    url: `${endpoint}`,
    method: "post",
    data: payload.payload.user
  });
  yield fetchUsers();
}
function* updateUsers(payload) {
  yield call(axios.request, {
    url: `${endpoint}/${payload.user.id}`,
    method: "put",
    data: payload.user
  });
  yield fetchUsers();
}
function* removeUsers(payload) {
  yield call(axios.request, {
    url: `${endpoint}/${payload.id}`,
    method: "delete"
  });
  yield fetchUsers();
}
const request = "_REQUESTED";
function* todoSaga() {
  yield takeLatest(`${type.FETCH_USERS}${request}`, fetchUsers);
  yield takeLatest(`${type.CREATE_USER}${request}`, createUser);
  yield takeLatest(`${type.UPDATE_USER}${request}`, updateUsers);
  yield takeLatest(`${type.REMOVE_USER}${request}`, removeUsers);
}

export default todoSaga;
