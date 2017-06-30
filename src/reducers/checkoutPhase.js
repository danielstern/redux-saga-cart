import { createReducer } from './../utility';
import {
    SET_CHECKOUT_PHASE
} from '../actions'
export const checkoutPhase = createReducer(null, {
    [SET_CHECKOUT_PHASE](state,{phase}) {
        return phase;
    }
});