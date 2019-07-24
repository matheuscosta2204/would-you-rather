import React from 'react';
import { connect } from 'react-redux';

import Login from './login';

const checkAuthentication = (props) => {
    if(props.user.id === null) {
        return (
            <Login />
        );
    } else {
        return props.children;
    }
}

function mapStateToProps ({ user }) {
    return { user };
}

export default connect(mapStateToProps)(checkAuthentication);