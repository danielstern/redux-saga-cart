import { takeEvery, put, select } from 'redux-saga/effects'

import {
    INITIALIZE_APP,
} from './../actions'

import Chance from 'chance';
const chance = new Chance();

function* appInitialization() {
    console.log("App initialized");
}

export function* appInitializationSaga() {
    yield takeEvery(INITIALIZE_APP, appInitialization);
}