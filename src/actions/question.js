import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../database/_DATA';
import { setAuthedUserAnswer } from './authedUser';

export const SET_QUESTIONS = "SET_QUESTIONS";
export const SET_QUESTION = "SET_QUESTION";
export const SET_QUESTION_ANSWER = "SET_QUESTION_ANSWER";

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

export function setQuestionVote ({ authedUser, qid, answer }) {
    return {
        type: SET_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
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

export function saveQuestionAnswer({ authedUser, qid, answer }) {
    return (dispatch) => {
        return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
            dispatch(setQuestionVote({ authedUser, qid, answer }));
            dispatch(setAuthedUserAnswer({ authedUser, qid, answer }));
        })
    }
}