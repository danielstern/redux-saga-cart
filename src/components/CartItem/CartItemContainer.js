import { connect } from 'react-redux'
import {
    CartItemDisplay
} from './CartItemDisplay';

import {
    
} from './../../actions'

import {
    itemsDetailSelector
} from './../../selectors'

const mapStateToProps = (state,{id, quantity}) => {
    console.log("An item container",id,quantity);
    const details = itemsDetailSelector(state);
    console.log("Details?",details.toJS());
    return {
        
    }
};
const mapDispatchToProps = (dispatch) => ({
    
});

export const CartItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartItemDisplay);