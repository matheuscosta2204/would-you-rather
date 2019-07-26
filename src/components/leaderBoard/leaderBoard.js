import React from 'react';
import { connect } from 'react-redux';

import './leaderBoard.css';
import CheckAuth from '../login/loginVerification';
import Score from '../score/score';

class LeaderBoard extends React.Component {
    render() {
        return (
            <CheckAuth>
                <div className="container">
                    {this.props.users.map(user => (
                        <Score key={user.id} user={user} />
                    ))}
                </div>
            </CheckAuth>
        )
    }
};

function compare( a, b ) {
    const aLength = Object.keys(a.answers).length + a.questions.length;
    const bLength = Object.keys(b.answers).length + b.questions.length;

    let comparison = 0;
    if(aLength < bLength) {
        comparison = 1;
    } else {
        comparison = -1;
    }
    return comparison;
}

function mapStateToProps ({ users }) {
    let newUsers = Object.keys(users).map(key => users[key]);
    return { 
        users: newUsers.sort(compare)
    };
}

export default connect(mapStateToProps)(LeaderBoard);