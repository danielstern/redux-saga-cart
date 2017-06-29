import { createSelector } from 'reselect'
export const customerServiceAvailabilitySelector = createSelector(
   state=>state.get("customerServiceAvailability"),
   customerServiceAvailability=>customerServiceAvailability
)