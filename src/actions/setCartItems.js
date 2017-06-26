import { makeActionCreator } from '../utility';
export const SET_CART_ITEMS = "SET_CART_ITEMS";
export const setCartItems = makeActionCreator(SET_CART_ITEMS,"items");
