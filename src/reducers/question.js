import { SET_QUESTIONS, SET_QUESTION, SET_QUESTION_ANSWER } from '../actions/question';
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
        case SET_QUESTION_ANSWER :
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        default :
            return state
    }    
}