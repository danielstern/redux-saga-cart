import { fromJS } from 'immutable'
export const defaultState = fromJS({
    currentUser:null,
    cartItems:[],
    users:[],
    items:[],
    taxRates:[],
    shippingTotal:0,
});