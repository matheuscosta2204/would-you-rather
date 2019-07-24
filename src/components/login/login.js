import React from 'react';
import { connect } from 'react-redux';

import { setAuthedUser } from '../../actions/authedUser';
import { getUsers } from '../../actions/users';

class Login extends React.Component {
    
    state = {
        userId: null
    }

    componentDidMount() {
        this.props.dispatch(getUsers()).then(res => {
            this.setState({
                userId: this.props.users[0].id
            })
        });
    }

    login = id => {
        this.props.dispatch(setAuthedUser({ id }));
    }
    
    onChangeSelect = e => {
        this.setState({ userId: e.target.value })
    }

    render() {
        return (
            <div>
                Login
                <select onChange={e => this.onChangeSelect(e)}>
                    {this.props.users.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
                <button onClick={() => this.login(this.state.userId)}>Logar</button>
            </div>
        );
    }
}

function mapStateToProps ({ users }) {
    return { 
        users: Object.keys(users).map(user => {
            return users[user];
        })
    };
}

export default connect(mapStateToProps)(Login);

