import { makeActionCreator } from '../utility';
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const setCurrentUser = makeActionCreator(SET_CURRENT_USER,"user");
