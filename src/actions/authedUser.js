export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const UNSET_AUTHED_USER = "UNSET_AUTHED_USER";

export function setAuthedUser (user) {
    return {
        type: SET_AUTHED_USER,
        user
    }
}

export function unsetAuthedUser () {
    return {
        type: UNSET_AUTHED_USER
    }
}