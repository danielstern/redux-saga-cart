import { take, call, put, select } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';

import {
    TOGGLE_CHECKING_OUT,
    setCheckoutPhase,
    QUANTITY_VERIFICATION_CHECKOUT_PHASE
} from './../actions'

import {
    currentUserSelector
} from '../selectors'

export function* checkout() {
    const user = yield select(currentUserSelector);
    yield put(setCheckoutPhase(QUANTITY_VERIFICATION_CHECKOUT_PHASE));
    const response = yield fetch(`http://localhost:8081/cart/validate/${user.get(`id`)}`)
}
export function* checkoutSaga() {
    while (true) {
        const isCheckingOut = yield take(TOGGLE_CHECKING_OUT);
        if (isCheckingOut) {
            yield call(checkout);
        }
    }
}