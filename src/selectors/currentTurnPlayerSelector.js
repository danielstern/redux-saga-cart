import { createSelector } from 'reselect'
export const currentTurnPlayerSelector = createSelector(
   state=>state.get("currentTurnPlayer"),
   currentTurnPlayer=>currentTurnPlayer
);