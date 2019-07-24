import { combineReducers } from 'redux';
import user from './authedUser';
import users from './users';
import question from './question';

export default combineReducers({
    user,
    users,
    question
})