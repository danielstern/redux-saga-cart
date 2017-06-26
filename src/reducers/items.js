import { createReducer } from './../utility';
import { SET_ITEM_DETAILS } from '../actions'
export const items = createReducer([], {
    [SET_ITEM_DETAILS](state,{item}) {
        if (state.find(detail=>detail.id === item.id)) {
            return state.update(detail=>detail.id === item.id,item);
        } else {
            return state.push(item);
        }
    }
});