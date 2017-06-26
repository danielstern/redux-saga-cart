import { createSelector } from 'reselect'
export const currentUserSelector = createSelector(
   state=>state.get(`currentUser`),
   currentUser=>currentUser
)