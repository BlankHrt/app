import { USER_LOGIN, USER_LOGOUT, USER_UPDATE } from '../actionType'

export function userUpdate(data) {
    return {
        type: USER_UPDATE,
        data: data
    }
}

export function userLogin(data) {
    return {
        type: USER_LOGIN,
        data: data
    }
}

export function userLogout() {
    return {
        type: USER_LOGOUT
    }
}
