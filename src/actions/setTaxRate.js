import { makeActionCreator } from '../utility';
export const SET_TAX_RATE = "SET_TAX_RATE";
export const setTaxRate = makeActionCreator(SET_TAX_RATE,"rate");
