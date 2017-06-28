import { makeActionCreator } from '../utility';
export const FETCHED = "FETCHED";
export const FETCHING = "FETCHING";
export const SET_ITEM_QUANTITY_FETCH_STATUS = "SET_ITEM_QUANTITY_FETCH_STATUS";
export const setItemQuantityFetchStatus = makeActionCreator(SET_ITEM_QUANTITY_FETCH_STATUS,"status");
