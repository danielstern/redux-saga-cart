import { connect } from 'react-redux'
import {
    CheckoutStatusViewDisplay
} from './CheckoutStatusViewDisplay';

const mapStateToProps = (state) => {
    return {
        
    }
};
const mapDispatchToProps = (dispatch) => ({
    
});

export const CheckoutStatusViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutStatusViewDisplay);