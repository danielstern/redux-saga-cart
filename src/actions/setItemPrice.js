import { makeActionCreator } from '../utility';
export const SET_ITEM_PRICE = "SET_ITEM_PRICE";
export const setItemPrice = makeActionCreator(SET_ITEM_PRICE,"id","price");
