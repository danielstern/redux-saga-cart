import { createReducer } from './../utility';
import { SET_CART_ITEMS } from '../actions'
import {
    fromJS
} from 'immutable'
export const cartItems = createReducer(0, {
    [SET_CART_ITEMS](state,{items}) {
        return fromJS(items);
    }
});