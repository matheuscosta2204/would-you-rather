import { SET_AUTHED_USER, UNSET_AUTHED_USER, SET_AUTHED_USER_ANSWER } from '../actions/authedUser';

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
        case SET_AUTHED_USER_ANSWER :
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [action.qid]: action.answer
                }
            }
        default :
            return state
    }
}