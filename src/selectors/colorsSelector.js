import { createSelector } from 'reselect';

export const colorsSelector = createSelector(
   state=>state.get("colors"),
   colors=>colors
)