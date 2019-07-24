import { _getUsers } from '../database/_DATA';

export const SET_USERS = "SET_USERS";

function setUsers (users) {
    return {
        type: SET_USERS,
        users
    }
}

export function getUsers () {
    return (dispatch) => {
        return _getUsers().then(res => {        
            dispatch(setUsers(res));
        })
    }
}