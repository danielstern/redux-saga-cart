import fetch from 'isomorphic-fetch';
import { takeLatest, put, select, call } from 'redux-saga/effects';
import { 
  DECREASE_ITEM_QUANTITY, 
  INCREASE_ITEM_QUANTITY, 
  setItemQuantityFetchStatus, 
  FETCHING, 
  decreaseItemQuantity,
  FETCHED
} from '../actions';
import { currentUserSelector } from '../selectors';


export function* handleIncreaseItemQuantity({id}){
  yield put(setItemQuantityFetchStatus(FETCHING));
  const user = yield select(currentUserSelector);
  const response = yield call(fetch, `http://localhost:8081/cart/add/${user.get('id')}/${id}`)
  console.info('Got response', response);
  if (response.status !== 200) {
    yield put(decreaseItemQuantity(id, true))
    alert("Sorry! Item is out of stock")
  }

  yield put(setItemQuantityFetchStatus(FETCHED))
}

export function* handleDecreaseItemQuantity({id, local}){
  if (local) {
    return
  }

  yield put(setItemQuantityFetchStatus(FETCHING));
  const user = yield select(currentUserSelector);
  const response = yield call(fetch, `http://localhost:8081/cart/remove/${user.get('id')}/${id}`)
  console.info('Got response', response);
  if (response.status !== 200) {
    console.warn('receiver non-200 status', response)
  }

  yield put(setItemQuantityFetchStatus(FETCHED))
}
export function* itemQuantitySaga(){
  yield[
    // takeLatest(DECREASE_ITEM_QUANTITY, handleDecreaseItemQuantity),
    takeLatest(INCREASE_ITEM_QUANTITY, handleIncreaseItemQuantity)
  ]
}