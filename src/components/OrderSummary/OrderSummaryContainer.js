import { connect } from 'react-redux'
import {
    OrderSummaryDisplay
} from './OrderSummaryDisplay';

import {
    FETCHED
} from './../../actions'

import {
    cartItemsSelector,
    itemPricesSelector,
    itemPriceSelector,
    shippingCostSelector,
    shippingFetchStatusSelector
} from './../../selectors'

const mapStateToProps = (state) => {
    console.log("Todo... calc tax...");
    const items = cartItemsSelector(state);
    const shippingFetched = shippingFetchStatusSelector(state) === FETCHED;
    const shippingCost = shippingCostSelector(state);
    // const prices = itemPricesSelector(state);
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

    console.log("Total?",subtotal);
    return {
        subtotalFetched,
        subtotal,
        shippingCost,
        shippingFetched
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