import { fromJS } from 'immutable'
export const defaultState = fromJS({
    currentUser:null,
    cartItems:null,
    items:[],
    taxRates:[],
    shippingTotal:0,
});