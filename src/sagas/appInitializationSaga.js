import { takeEvery } from 'redux-saga/effects'

import {
    INITIALIZE_APP,
} from './../actions'

function* appInitialization() {
    console.log("App initialized");
}

export function* appInitializationSaga() {
    yield takeEvery(INITIALIZE_APP, appInitialization);
}