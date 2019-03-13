import { put, take } from "redux-saga/effects";
import fetch from 'isomorphic-fetch';
import { getColors } from "../actions";

export function* colorsSaga(){
  const response = yield fetch(`http://localhost:8081/colors`);
  const {colors} = yield response.json();
  yield put(getColors(colors));
}