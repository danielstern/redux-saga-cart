import { makeActionCreator } from '../utility';
export const GET_CURRENT_USER_INFO = "GET_CURRENT_USER_INFO";
export const getCurrentUserInfo = makeActionCreator(GET_CURRENT_USER_INFO,"id");
