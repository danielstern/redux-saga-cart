import { takeEvery, select, put } from 'redux-saga/effects'

import {
    BEGIN_MOVE_SELECTION,
    requestPlayerSelectMove
} from './../actions'

import {
    currentTurnPlayerSelector
} from './../selectors'

function* moveSelection() {
    const currentTurnPlayer = yield select(currentTurnPlayerSelector);
    yield put(requestPlayerSelectMove(currentTurnPlayer));
}

export function* moveSelectionSaga() {
    yield takeEvery(BEGIN_MOVE_SELECTION, moveSelection);
}