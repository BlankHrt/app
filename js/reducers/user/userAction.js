
const USER_UPDATE = 'USER_UPDATE'
const USER_LOGIN = 'USER_LOGIN'
const USER_LOGOUT = 'USER_LOGOUT'

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
