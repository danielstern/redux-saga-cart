import { connect } from 'react-redux'
import {
    CartItemDisplay
} from './CartItemDisplay';

import {
    
} from './../../actions'

import {
    itemsDetailSelector
} from './../../selectors'

const mapStateToProps = (state,{id}) => {
    const details = itemsDetailSelector(state);
    console.log("Details?",details.toJS());
    const detail = details.find(detail=>detail.id === id);
    return {
        fetched: detail !== undefined,
        ... detail
    }
};
const mapDispatchToProps = (dispatch) => ({
    
});

export const CartItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartItemDisplay);