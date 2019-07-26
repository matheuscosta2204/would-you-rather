import { _getQuestions, _saveQuestion } from '../database/_DATA';
export const SET_QUESTIONS = "SET_QUESTIONS";
export const SET_QUESTION = "SET_QUESTION";

function setQuestions (questions) {
    return {
        type: SET_QUESTIONS,
        questions
    }
}

export function setQuestion (question) {
    return {
        type: SET_QUESTION,
        question
    }
}

export function getQuestions () {
    return (dispatch) => {
        return _getQuestions().then(res => {
            dispatch(setQuestions(res));
        })
    }
}

export function saveQuestion(question) { 
    return (dispatch) => {
        return _saveQuestion(question).then(res => {
            dispatch(setQuestion(res));
            return res;
        })
    }
}