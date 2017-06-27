import { takeEvery, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import {
    INCREASE_ITEM_QUANTITY,
} from './../actions'

function* increaseItemQuantity({id}) {
    console.log("Increase quantity...",id);
    yield delay(500);
    console.log("DONE!");
}

export function* itemQuantitySaga() {
    // yield takeEvery(INCREASE_ITEM_QUANTITY, increaseItemQuantity); // DONE! is called for each click
    yield takeLatest(INCREASE_ITEM_QUANTITY, increaseItemQuantity); // DONE! only appears once
}