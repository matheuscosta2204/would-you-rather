import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { unsetAuthedUser } from '../../../actions/authedUser';
import './toolbar.css';

const toolbar = (props) => (
    <header className="header">
        <Link to="/" className="item">Home</Link>
        <Link to="/new-question" className="item">New Question</Link>
        <Link to="/leader-board" className="item">Leader Board</Link>
        {typeof props.user !== 'undefined' && 
            <div className="user-header">
                <div className="user-item">{props.user.name}</div>
                <div className="item" onClick={() => props.dispatch(unsetAuthedUser())}>Loggout</div>
            </div>}
    </header>
);

function mapStateToProps ({ user, users }) {
    return { user: users[user.id] };
}
export default connect(mapStateToProps)(toolbar);