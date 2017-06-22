import { fromJS } from 'immutable'
export const defaultState = fromJS({
    currentUser:"U10000",
    cartItems:[],
    users:[],
    items:[],
    taxRates:[],
    shippingTotal:0,
});