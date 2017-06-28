import { connect } from 'react-redux'
import {
    OrderSummaryDisplay
} from './OrderSummaryDisplay';

import {
    FETCHED
} from './../../actions'

import {
    cartItemsSelector,
    itemPriceSelector,
    shippingCostSelector,
    shippingFetchStatusSelector,
    taxRateSelector
} from './../../selectors'

const mapStateToProps = (state) => {
    const items = cartItemsSelector(state);
    const shippingFetched = shippingFetchStatusSelector(state) === FETCHED;
    const shippingCost = shippingCostSelector(state);
    const taxRate = taxRateSelector(state);
    const taxRateFetched = taxRate !== null;
    let subtotalFetched = true;
    let subtotal = 0;
    if (items === null) {
        subtotalFetched = false;
    } else {
        subtotal = items.reduce((total,item)=>{
            const id = item.get(`id`);
            const quantity = item.get('quantity');
            const price = itemPriceSelector(id)(state);
            if (!price) {
                subtotalFetched = false;
            } else {
                total += price * quantity;
            }
            return total;
        },0);
    }

    const totalTax = (subtotal + shippingCost) * taxRate;
    const totalTaxFetched = taxRateFetched && shippingFetched && subtotalFetched;
    const total = totalTaxFetched ? subtotal + shippingCost + totalTax : null;

    return {
        subtotalFetched,
        subtotal,
        shippingCost,
        shippingFetched,
        taxRate,
        taxRateFetched,
        totalTax,
        totalTaxFetched,
        total
    }
};
const mapDispatchToProps = (dispatch) => ({
    checkout:()=>{

    }
});

export const OrderSummaryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderSummaryDisplay);