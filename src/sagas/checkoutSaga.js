import { take, call, put, select } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch';

import {
    TOGGLE_CHECKING_OUT,
    setCheckoutPhase,
    QUANTITY_VERIFICATION_CHECKOUT_PHASE,
    CREDIT_VALIDATION_CHECKOUT_PHASE,
    ERROR_CHECKOUT_PHASE,
    PURCHASE_FINALIZATION_CHECKOUT_PHASE,
    SUCCESS_CHECKOUT_PHASE
} from './../actions'

import {
    currentUserSelector
} from '../selectors'

export function * executePurchase(user) {
    const response = yield fetch(`http://localhost:8081/card/charge/${user.get(`id`)}`);
    const { success } = yield response.json();
    return success;
}

export function * validateCart(user) {
    const response = yield fetch(`http://localhost:8081/cart/validate/${user.get(`id`)}`);
    const { validated } = yield response.json();
    return validated;
}

export function * validateCreditCard(user) {
    const response = yield fetch(`http://localhost:8081/card/validate/${user.get(`id`)}`);
    const { validated } = yield response.json();
    return validated;
}

export function* checkout() {
    const user = yield select(currentUserSelector);

    yield put(setCheckoutPhase(QUANTITY_VERIFICATION_CHECKOUT_PHASE));
    const cartValidated = yield call(validateCart,user);
    if (!cartValidated) {
        yield put(setCheckoutPhase(ERROR_CHECKOUT_PHASE));
        return;
    }

    yield put(setCheckoutPhase(CREDIT_VALIDATION_CHECKOUT_PHASE));
    const creditCardValidated = yield call(validateCreditCard,user);
    if (!creditCardValidated) {
        yield put(setCheckoutPhase(ERROR_CHECKOUT_PHASE));
        return;
    }

    yield put(setCheckoutPhase(PURCHASE_FINALIZATION_CHECKOUT_PHASE));
    const purchaseSuccessful = yield call(executePurchase, user);
    if (!purchaseSuccessful) {
        yield put(setCheckoutPhase(ERROR_CHECKOUT_PHASE));
        return;
    }

    yield put(setCheckoutPhase(SUCCESS_CHECKOUT_PHASE));
}
export function* checkoutSaga() {
    while (true) {
        const isCheckingOut = yield take(TOGGLE_CHECKING_OUT);
        if (isCheckingOut) {
            yield call(checkout);
        }
    }
}