import { createReducer } from './../utility';
import {
    SET_CART_ITEMS,
    INCREASE_ITEM_QUANTITY,
    DECREASE_ITEM_QUANTITY
} from '../actions'

import {
    fromJS
} from 'immutable'

export const cartItems = createReducer(null, {
    [SET_CART_ITEMS](state,{items}) {
        return fromJS(items);
    },
    [INCREASE_ITEM_QUANTITY](state,{id}) {
        const index = state.findIndex(a => a.get(`id`) === id);
        return state.update(index,b => b.update('quantity',q=>q+1));
    },
    [DECREASE_ITEM_QUANTITY](state,{id}) {
        const index = state.findIndex(a => a.get(`id`) === id);
        const value = state.get(index).get('quantity');
        if (value === 1) {
            return state.filter(a => a.get(`id`) !== id);
        }
        return state.update(index,b => b.update('quantity',q=>q-1));
    }
});