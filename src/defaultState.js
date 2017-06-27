import { fromJS } from 'immutable'
export const defaultState = fromJS({
    currentUser:null,
    cartItems:null,
    items:[],
    itemPrices:[],
    taxRates:[],
    shippingTotal:0,
});