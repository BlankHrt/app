import { USER_LOGIN, USER_LOGOUT, USER_UPDATE } from '../actionType'

const initialState = {
  user: {
    name:''
  },
  isLogin: false,
  token: null
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_UPDATE:
      return {
        ...state,
        user: action.data.user,
        isLogin: action.data.isLogin,
        token: action.data.token
      }
    case USER_LOGIN:
      return {
        ...state,
        user: action.data.user,
        isLogin: true,
        token: action.data.token
      }
    case USER_LOGOUT:
      return state
    default:
      return state
  }
}