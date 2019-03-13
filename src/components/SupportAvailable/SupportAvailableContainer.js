import { connect } from 'react-redux'
import {
    SupportAvailableDisplay
} from './SupportAvailableDisplay';

import {
    
} from './../../actions'

import {
    customerServiceAvailabilitySelector, 
    colorsSelector
} from './../../selectors'

const mapStateToProps = (state) => {
    return {
        isAvailable:customerServiceAvailabilitySelector(state),
        colors:colorsSelector(state)
    }
};
const mapDispatchToProps = (dispatch) => ({
    
});

export const SupportAvailableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SupportAvailableDisplay);