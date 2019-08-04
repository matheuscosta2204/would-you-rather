import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const checkAuthentication = (props) => {
    if(props.user.id === null) {
        return (
            <Redirect to="/login" />
        );
    } else {
        return props.children;
    }
}

function mapStateToProps ({ user }) {
    return { user };
}

export default connect(mapStateToProps)(checkAuthentication);