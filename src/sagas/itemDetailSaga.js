import fetch from 'isomorphic-fetch';
import { SET_CART_ITEMS, setItemDetails } from '../actions';
import { fork, take, put } from 'redux-saga/effects';

export function* loadItemDetails(item) {
  console.info("item", item)
  const {id} = item;
  const response = yield fetch(`http://localhost:8081/items/${id}`);
  const data = yield response.json();
  const info = data[0];
  yield put(setItemDetails(info));
  // yield put(setItemDetails(item));
}
export function* itemDetailSaga(){
  const {items} = yield take(SET_CART_ITEMS);
  yield items.map(item => fork(loadItemDetails, item));
}