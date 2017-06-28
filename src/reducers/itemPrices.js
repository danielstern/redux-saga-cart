import { createReducer } from './../utility';
import { SET_ITEM_PRICE } from '../actions'
import {
    fromJS
} from 'immutable'
export const itemPrices = createReducer([], {
    [SET_ITEM_PRICE](state,{id,price}) {
        if (state.find(detail=>detail.id === id)) {
            return state.update(detail=>detail.id === id,price);
        } else {
            return state.push(fromJS({id,price}));
        }
    }
});