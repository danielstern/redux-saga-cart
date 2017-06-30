import { createSelector } from 'reselect'
export const checkoutPhaseSelector = createSelector(
   state=>state.get("checkoutPhase"),
   checkoutPhase=>checkoutPhase
)