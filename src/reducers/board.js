import { createReducer } from './../utility';
import {
    SET_BOARD
} from '../actions'
export const board = createReducer([], {
    [SET_BOARD](state,{board}) {
        return board;
    }
});