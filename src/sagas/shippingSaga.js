import { cancel, select, put, take, fork } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';

import {
    SET_CART_ITEMS,
    INCREASE_ITEM_QUANTITY,
    DECREASE_ITEM_QUANTITY,
    FETCHED,
    FETCHING,
    setShippingFetchStatus,
    setShippingCost
} from './../actions'

import {
    cartItemsSelector
} from '../selectors'

function* shipping() {
    yield put(setShippingFetchStatus(FETCHING));
    const items = yield select(cartItemsSelector);
    console.log("shipping",items);
    const itemRequestString = items.reduce((string,item)=>{
        for (let i = 0; i < item.get(`quantity`); i++) {
            string += item.get(`id`) + ",";
        }
        return string;
    },"").replace(/,\s*$/, '');
    const response = yield fetch(`http://localhost:8081/shipping/${itemRequestString}`);
    const { total } = yield response.json();
    yield put(setShippingCost(total));
    yield put(setShippingFetchStatus(FETCHED));
}

export function* shippingSaga() {
    let task;
    while (true) {
        if (task) {
            yield cancel(task);
        }
        yield take([SET_CART_ITEMS, INCREASE_ITEM_QUANTITY, DECREASE_ITEM_QUANTITY]);
        task = yield fork(shipping);
    }
}