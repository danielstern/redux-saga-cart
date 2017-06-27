import { createReducer } from './../utility';
import { SET_ITEM_PRICE } from '../actions'
export const itemPrices = createReducer([], {
    [SET_ITEM_PRICE](state,{id,price}) {
        if (state.find(detail=>detail.id === id)) {
            return state.update(detail=>detail.id === id,price);
        } else {
            return state.push({id,price});
        }
    }
});