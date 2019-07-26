import { SET_QUESTIONS, SET_QUESTION } from '../actions/question';
import _ from 'lodash';

export default function question (state = {}, action) {
    switch(action.type) {
        case SET_QUESTIONS :
            return {
                ...state,
                ..._.mapKeys(action.questions, 'id')
            }
        case SET_QUESTION :
            return {
                ...state,
                [action.question.id]: action.question
            }
        default :
            return state
    }
}