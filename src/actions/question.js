import { _getQuestions } from '../database/_DATA';

export const SET_QUESTIONS = "SET_QUESTIONS";

function setQuestions (questions) {
    return {
        type: SET_QUESTIONS,
        questions
    }
}

export function getQuestions () {
    return (dispatch) => {
        return _getQuestions().then(res => {
            dispatch(setQuestions(res));
        })
    }
}