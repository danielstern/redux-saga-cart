import { createReducer } from '../utility';
import { SET_SHIPPING_FETCH_STATUS, FETCHING } from '../actions'
export const shippingFetchStatus = createReducer(FETCHING, {
    [SET_SHIPPING_FETCH_STATUS](state,{status}) {
        return status;
    }
});