import { fromJS } from 'immutable'
// TODO... finalize value list
export const defaultState = fromJS({
    currentUser:null,
    cartItems:null,
    items:[],
    itemPrices:[],
    taxRates:[],
    shippingTotal:0,
});