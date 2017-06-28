import { createSelector } from 'reselect'
export const shippingFetchStatusSelector = createSelector(
   state=>state.get(`shippingFetchStatus`),
   shippingFetchStatus=>shippingFetchStatus
)