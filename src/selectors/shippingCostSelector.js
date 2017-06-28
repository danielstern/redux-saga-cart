import { createSelector } from 'reselect'
export const shippingCostSelector = createSelector(
   state=>state.get(`shippingCost`),
   shippingCost=>shippingCost
)