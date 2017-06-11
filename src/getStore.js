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

const stateTransformer = (state) => {
    if (Iterable.isIterable(state)) return state.toJS();
    else return state;
};

const logger = createLogger({
    stateTransformer,
});

import {
     REQUEST_PLAYER_SELECT_MOVE
} from './actions'
const createUserSelectionMiddleware = ({onP1Move,onP2Move}) => store => next => action => {
    if (action.type === REQUEST_PLAYER_SELECT_MOVE) {
        const fn = action.pID === "GOLD" ? onP1Move : onP2Move;
        fn({
            board:store.getState().get(`board`),
            makeSelection(n){
                console.log("Made selection!");
            }
        })
    }
    return next(action);
}
export const getStore = ({onP1Move,onP2Move})=>{
    const sagaMiddleware = createSagaMiddleware();
    const userSelectionMiddleware = createUserSelectionMiddleware({onP1Move,onP2Move});
    const middleWares = [sagaMiddleware,thunk,userSelectionMiddleware];
    if (getQuery()['logger']) { middleWares.push(logger)}
    const composables = [applyMiddleware(...middleWares)
    //    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ];
    const enhancer = compose(
        ... composables
);
    console.log("Reducer?",reducer);
    const store = createStore(
        reducer,
        enhancer,
    );
    initSagas(sagaMiddleware);
    return store;
};