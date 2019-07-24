import { SET_AUTHED_USER, UNSET_AUTHED_USER } from '../actions/authedUser';

const initialState = {
    id: null,
    name: null
}

export default function user (state = initialState, action) {
    switch(action.type) {
        case SET_AUTHED_USER :
            return {
                ...state,
                id: action.user.id,
                name: action.user.name
            }
        case UNSET_AUTHED_USER :
            return {
                ...state,
                id: null,
                name: null
            }
        default :
            return state
    }
}