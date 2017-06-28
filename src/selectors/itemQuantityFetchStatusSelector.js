import { createSelector } from 'reselect'
export const itemQuantityFetchStatusSelector = createSelector(
   state=>state.get(`itemQuantityFetchStatus`),
   itemQuantityFetchStatus=>itemQuantityFetchStatus
)