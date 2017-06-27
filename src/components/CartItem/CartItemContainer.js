import { connect } from 'react-redux'
import {
    CartItemDisplay
} from './CartItemDisplay';

import {
    increaseItemQuantity,
    decreaseItemQuantity
} from './../../actions'

import {
    itemsDetailSelector,
    itemPriceSelector,
    itemPricesSelector
} from './../../selectors'

const mapStateToProps = (state,{id}) => {
    const details = itemsDetailSelector(state);
    const detail = details.find(detail=>detail.id === id);
    const price = itemPriceSelector(id)(state);
    return {
        fetched: detail !== undefined,
        price,
        ... detail
    }
};

const mapDispatchToProps = (dispatch) => ({
    increaseItemQuantity(id){
        dispatch(increaseItemQuantity(id));
    },
    decreaseItemQuantity(id){
        dispatch(decreaseItemQuantity(id));
    }
});

export const CartItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartItemDisplay);