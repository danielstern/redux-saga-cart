import { makeActionCreator } from '../utility';
export const SET_ITEM_DETAILS = "SET_ITEM_DETAILS";
export const setItemDetails = makeActionCreator(SET_ITEM_DETAILS,"item");
