import { makeActionCreator } from '../utility';
export const SET_SHIPPING_FETCH_STATUS = "SET_SHIPPING_FETCH_STATUS";
export const setShippingFetchStatus = makeActionCreator(SET_SHIPPING_FETCH_STATUS,"status");
