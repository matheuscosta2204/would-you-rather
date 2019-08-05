import React from 'react';
import { connect } from 'react-redux';

import { setAuthedUser } from '../../actions/authedUser';
import { getUsers } from '../../actions/users';

class Login extends React.Component {
    
    state = {
        user: {}
    }

    componentDidMount() {
        this.props.dispatch(getUsers()).then(res => {
            this.setState({
                user: this.props.usersArray[0]
            })
        });
    }

    login = user => {
        this.props.dispatch(setAuthedUser(user));
        //this.props.history.push('');
    }
    
    onChangeSelect = e => {
        this.setState({ user: this.props.users[e.target.value] });
    }

    render() {
        return (
            <div>
                Login
                <select onChange={e => this.onChangeSelect(e)}>
                    {this.props.usersArray.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>
                <button onClick={() => this.login(this.state.user)}>Logar</button>
            </div>
        );
    }
}

function mapStateToProps ({ users }) {
    return { 
        usersArray: Object.keys(users).map(user => {
            return users[user];
        }),
        users
    };
}

export default connect(mapStateToProps)(Login);

