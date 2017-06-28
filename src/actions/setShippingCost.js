import { makeActionCreator } from '../utility';
export const SET_SHIPPING_COST = "SET_SHIPPING_COST";
export const setShippingCost = makeActionCreator(SET_SHIPPING_COST,"cost");
