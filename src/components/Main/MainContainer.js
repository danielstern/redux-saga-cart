import { connect } from 'react-redux'
import {
    MainDisplay
} from './MainDisplay';

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

export const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainDisplay);