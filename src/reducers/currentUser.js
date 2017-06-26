import { createReducer } from './../utility';
import { fromJS} from 'immutable'
import {
    SET_CURRENT_USER
} from '../actions'
export const currentUser = createReducer(null, {
    [SET_CURRENT_USER](state,{user}) {
        return fromJS(user);
    }
});