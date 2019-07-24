import { SET_USERS } from '../actions/users';
import _ from 'lodash';

export default function users (state = {}, action) {
    switch(action.type) {
        case SET_USERS :
            return {
                ...state,
                ..._.mapKeys(action.users, 'id')
            }
        default :
            return state
    }
}