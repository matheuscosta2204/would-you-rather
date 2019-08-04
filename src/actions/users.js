import { _getUsers } from '../database/_DATA';

export const SET_USERS = "SET_USERS";
export const SET_QUESTION_TO_USERS = "SET_QUESTION_TO_USERS";
export const SET_QUESTION_ANSWER_TO_USERS = "SET_QUESTION_ANSWER_TO_USERS";

function setUsers (users) {
    return {
        type: SET_USERS,
        users
    }
}

export function setQuestionToUser (question) {
    return {
        type: SET_QUESTION_TO_USERS,
        question
    }
}

export function setQuestionAnswerToUser ({ authedUser, qid, answer }) {
    return {
        type: SET_QUESTION_ANSWER_TO_USERS,
        authedUser,
        qid,
        answer
    }
}

export function getUsers () {
    return (dispatch) => {
        return _getUsers().then(res => {        
            dispatch(setUsers(res));
        })
    }
}