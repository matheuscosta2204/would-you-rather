import { SET_AUTHED_USER, UNSET_AUTHED_USER } from '../actions/authedUser';

const initialState = {
    id: null,
    name: null,
    answers: [],
    questions: [],
}

export default function user (state = initialState, action) {
    switch(action.type) {
        case SET_AUTHED_USER :
            return {
                ...state,
                id: action.user.id,
                name: action.user.name,
                answers: action.user.answers,
                questions: action.user.questions
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