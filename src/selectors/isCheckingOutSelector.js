import { createSelector } from 'reselect'
export const isCheckingOutSelector = createSelector(
   state=>state.get("isCheckingOut"),
   isCheckingOut=>isCheckingOut
)