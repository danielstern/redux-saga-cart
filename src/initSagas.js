import * as sagas from './sagas';

export const initSagas = (sagaMiddleware)=>{
    Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};