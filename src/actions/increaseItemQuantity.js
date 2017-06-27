import { makeActionCreator } from '../utility';
export const INCREASE_ITEM_QUANTITY = "INCREASE_ITEM_QUANTITY";
export const increaseItemQuantity = makeActionCreator(INCREASE_ITEM_QUANTITY,"id");
