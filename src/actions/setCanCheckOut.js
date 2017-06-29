import { makeActionCreator } from '../utility';
export const SET_CAN_CHECK_OUT = "SET_CAN_CHECK_OUT";
export const setCanCheckOut = makeActionCreator(SET_CAN_CHECK_OUT,"value");
