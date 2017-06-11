import { createSelector } from 'reselect'
export const boardSelector = createSelector(
   state=>state.get("board"),
   board=>board
)