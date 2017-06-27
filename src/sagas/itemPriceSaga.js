import { take, all, fork, put } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';

import {
    SET_CURRENT_USER,
    SET_CART_ITEMS,
    setItemPrice
} from '../actions'

function* fetchItemPrice(id,currency){
    const response = yield fetch(`http://localhost:8081/prices/${currency}/${id}`);
    const json = yield response.json();
    const price = json[0].price;
    yield put(setItemPrice(id,price));
}

export function* itemPriceSaga() {
    const [{user}, {items}] = yield all([
        take(SET_CURRENT_USER),
        take(SET_CART_ITEMS)
    ]);
    // yield call(itemPrice,userAction.user,itemsAction.items);
    yield items.map(item=>fork(fetchItemPrice, item.id, user.country));
}