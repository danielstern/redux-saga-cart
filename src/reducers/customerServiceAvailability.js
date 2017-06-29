import { createReducer } from './../utility';
import { SET_CUSTOMER_SERVICE_AVAILABILITY } from '../actions'
export const customerServiceAvailability = createReducer(false, {
    [SET_CUSTOMER_SERVICE_AVAILABILITY](state,{availability}) {
        return availability;
    }
});