import { SET_QUESTIONS } from '../actions/question';
import _ from 'lodash';

export default function questions (state = {}, action) {
    switch(action.type) {
        case SET_QUESTIONS :
            return {
                ...state,
                ..._.mapKeys(action.questions, 'id')
            }
        default :
            return state
    }
}