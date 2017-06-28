import { createReducer } from './../utility';
import { SET_SHIPPING_COST } from '../actions'
export const shippingCost = createReducer(0, {
    [SET_SHIPPING_COST](state,{cost}) {
        return cost;
    }
});