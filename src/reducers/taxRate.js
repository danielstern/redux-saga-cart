import { createReducer } from './../utility';
import { SET_TAX_RATE } from '../actions';
export const taxRate = createReducer(null, {
    [SET_TAX_RATE](state,{rate}) {
        return rate;
    }
});