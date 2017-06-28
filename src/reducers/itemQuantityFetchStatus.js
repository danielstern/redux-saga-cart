import { createReducer } from './../utility';
import {
    SET_ITEM_QUANTITY_FETCH_STATUS,
    FETCHED
} from '../actions'
export const itemQuantityFetchStatus = createReducer(FETCHED, {
    [SET_ITEM_QUANTITY_FETCH_STATUS](state,{status}) {
        return status;
    }
});