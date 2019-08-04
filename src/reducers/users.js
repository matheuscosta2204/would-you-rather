import { SET_USERS, SET_QUESTION_TO_USERS, SET_QUESTION_ANSWER_TO_USERS } from '../actions/users';
import _ from 'lodash';

export default function users (state = {}, action) {
    switch(action.type) {
        case SET_USERS :
            return {
                ...state,
                ..._.mapKeys(action.users, 'id')
            }
        case SET_QUESTION_TO_USERS :
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            }
        case SET_QUESTION_ANSWER_TO_USERS :
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        default :
            return state
    }
}