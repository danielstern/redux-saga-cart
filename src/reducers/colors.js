import {createReducer} from './../utility';
import { GET_COLORS } from '../actions';

export const colors = createReducer(null, {
  [GET_COLORS](state, {colors}){
    return colors
  }
})

