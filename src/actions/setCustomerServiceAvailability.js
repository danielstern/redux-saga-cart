import { makeActionCreator } from '../utility';
export const SET_CUSTOMER_SERVICE_AVAILABILITY = "SET_CUSTOMER_SERVICE_AVAILABILITY";
export const setCustomerServiceAvailability = makeActionCreator(SET_CUSTOMER_SERVICE_AVAILABILITY,"availability");
