import { makeActionCreator } from '../utility';
export const DECREASE_ITEM_QUANTITY = "DECREASE_ITEM_QUANTITY";
export const decreaseItemQuantity = makeActionCreator(DECREASE_ITEM_QUANTITY,"id","local");
