import { createReducer } from './../utility';
import { TOGGLE_CHECKING_OUT} from '../actions'
export const isCheckingOut = createReducer(false, {
    [TOGGLE_CHECKING_OUT](state,{value}) {
        return value;
    }
});