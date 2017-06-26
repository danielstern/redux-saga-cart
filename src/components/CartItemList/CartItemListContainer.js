import { connect } from 'react-redux'
import {
    CartItemListDisplay
} from './CartItemListDisplay';

import {
    cartItemsSelector
} from './../../selectors'

const mapStateToProps = (state) => {
    const items = cartItemsSelector(state);
    return {
        items,
        fetched: items !== null
    }
};

export const CartItemListContainer = connect(
    mapStateToProps
)(CartItemListDisplay);