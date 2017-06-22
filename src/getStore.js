import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable'
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk'

import { getQuery } from './utility'
import { initSagas } from './initSagas';
import { reducer } from './combineReducers';
import { defaultState } from './defaultState'

const stateTransformer = (state) => {
    if (Iterable.isIterable(state)) return state.toJS();
    else return state;
};

const logger = createLogger({
    stateTransformer,
});

export const getStore = ()=>{
    const sagaMiddleware = createSagaMiddleware();
    const middleWares = [sagaMiddleware,thunk];
    if (getQuery()['logger']) { middleWares.push(logger)}
    const composables = [applyMiddleware(...middleWares)
    //    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ];
    const enhancer = compose(
        ... composables
);
    const store = createStore(
        reducer,
        defaultState,
        enhancer,
    );
    initSagas(sagaMiddleware);
    return store;
};