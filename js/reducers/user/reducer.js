import {
  USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED,
  USER_LOGOUT, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAILED,
  USER_UPDATE, USER_UPDATE_SUCCESS, USER_UPDATE_FAILED
} from '../actionType'

const initialState = {
  user: {
    name: '',
    id: null
  },
  isLogin: false,
  token: null,
  checkLoginError: false, // 登录时状态，失败返回true
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLogin: true,
        token: action.payload.token,
        checkLoginError: false,
      }
    case USER_LOGIN_FAILED:
      return {
        ...state,
        isLogin: false,
        checkLoginError: true
      }
    case USER_LOGOUT:
      return state;
    default:
      return {
        ...state
      }
  }
}