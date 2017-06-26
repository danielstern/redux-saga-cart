import { connect } from 'react-redux'
import {
    UserInfoDisplay
} from './UserInfoDisplay';

import {
    currentUserSelector
} from './../../selectors'

const mapStateToProps = (state) => {
    const user = currentUserSelector(state);
    console.log("User?",user);
    return user ? {
        ...user.toJS(),
        fetched:true
    } : {
        fetched:false
    }
};

export const UserInfoContainer = connect(
    mapStateToProps
)(UserInfoDisplay);