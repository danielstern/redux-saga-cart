import { createSelector } from 'reselect'
export const taxRateSelector = createSelector(
   state=>state.get("taxRate"),
   taxRate=>taxRate
)