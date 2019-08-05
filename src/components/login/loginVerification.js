import React from 'react';
import { connect } from 'react-redux';

import Login from './login';
import { getQuestions } from '../../actions/question';

class CheckAuthentication extends React.Component {
    componentDidMount() {
        this.props.dispatch(getQuestions());
    }

    render() {
        if(this.props.user.id === null) {
            return (
                <Login />
            );
        } else {
            return this.props.children;
        }
    }
}

function mapStateToProps ({ user }) {
    return { user };
}

export default connect(mapStateToProps)(CheckAuthentication);