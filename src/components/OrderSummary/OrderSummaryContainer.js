import { connect } from 'react-redux'
import {
    OrderSummaryDisplay
} from './OrderSummaryDisplay';

import {
    
} from './../../actions'

import {
    cartItemsSelector,
    itemPricesSelector,
    itemPriceSelector
} from './../../selectors'

const mapStateToProps = (state) => {
    console.log("Todo... calc tax...");
    const items = cartItemsSelector(state);
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
                console.warn(`No price found for item`, id);
                subtotalFetched = false;
            } else {
                console.log("Got price",price);
                total += price * quantity;
            }
            return total;
        },0);
    }

    console.log("Total?",subtotal);
    return {
        subtotalFetched,
        subtotal
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