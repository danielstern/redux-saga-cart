import { takeLatest, select, put } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';

import {
    INCREASE_ITEM_QUANTITY,
    setItemQuantityFetchStatus,
    decreaseItemQuantity,
    FETCHING,
    FETCHED
} from './../actions'

import {
    currentUserSelector
} from '../selectors'

function* increaseItemQuantity({id}) {
    yield put(setItemQuantityFetchStatus(FETCHING));
    const user = yield select(currentUserSelector);
    const response = yield fetch(`http://localhost:8081/cart/add/${user.get('id')}/${id}`);

    if (response.status !== 200) {
        yield put(decreaseItemQuantity(id));
        alert("Sorry, there weren't enough items in stock to complete your request.");
        // console.log("Todo... record maximu")
    } else {
        // Reverse the actions so far
    }
    yield put(setItemQuantityFetchStatus(FETCHED));
}

export function* itemQuantitySaga() {
    // yield takeEvery(INCREASE_ITEM_QUANTITY, increaseItemQuantity); // DONE! is called for each click
    yield takeLatest(INCREASE_ITEM_QUANTITY, increaseItemQuantity); // DONE! only appears once
}