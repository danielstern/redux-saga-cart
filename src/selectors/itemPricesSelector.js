import { createSelector } from 'reselect'
export const itemPricesSelector = createSelector(
   state=>state.get(`itemPrices`),
   itemPrices=>itemPrices
);

export const itemPriceSelector = (id) => (state) => {
    const entry = itemPricesSelector(state).find(item=>item.get(`id`) === id);
    if (entry) {
        return entry.get(`price`);
    } else {
        return null;
    }
};