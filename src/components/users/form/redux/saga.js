import { call, put, takeLatest } from "redux-saga/effects";
import type from "./types";
import action from "./actions";

function* updateFieldValues(payload) {
  yield put(action.updateFieldValues(payload.payload));
}

const request = "_REQUESTED";
function* todoSaga() {
  yield takeLatest(`${type.UPDATE_FIELD_VALUES}${request}`, updateFieldValues);
}

export default todoSaga;
