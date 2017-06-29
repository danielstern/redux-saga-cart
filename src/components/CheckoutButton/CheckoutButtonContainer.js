import { connect } from 'react-redux'
import {
    CheckoutButtonDisplay
} from './CheckoutButtonDisplay';

import {
    toggleCheckingOut
} from './../../actions'

import {
    canCheckOutSelector
} from './../../selectors'

const mapStateToProps = (state) => {
    return {
        canCheckOut:canCheckOutSelector(state)
    }
};
const mapDispatchToProps = (dispatch) => ({
    handleRequestCheckout(){
        dispatch(toggleCheckingOut(true));
    }
});

export const CheckoutButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutButtonDisplay);