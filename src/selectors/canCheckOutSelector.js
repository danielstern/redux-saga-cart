import { createSelector } from 'reselect'
export const canCheckOutSelector = createSelector(
   state=>state.get("canCheckOut"),
   canCheckOut=>canCheckOut
)