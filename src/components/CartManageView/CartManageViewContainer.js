import { connect } from 'react-redux'
import {
    CartManageViewDisplay
} from './CartManageViewDisplay';

import {
    
} from './../../actions'

import {
    
} from './../../selectors'

const mapStateToProps = (state) => {
    return {
        
    }
};
const mapDispatchToProps = (dispatch) => ({
    
});

export const CartManageViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartManageViewDisplay);