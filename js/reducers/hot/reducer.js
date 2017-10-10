import {
  HOT_GETBYPAGE, HOT_GETBYPAGE_SUCCESS, HOT_GETBYPAGE_FALIED,
  HOT_ONREFRESH, HOT_ONREFRESH_SUCCESS, HOT_ONREFRESH_FAILED,
  HOT_SUPPORT, HOT_SUPPORT_SUCCESS, HOT_SUPPORT_FAILED,
  HOT_UNSUPPORT, HOT_UNSUPPORT_SUCCESS, HOT_UNSUPPORT_FAILED
} from '../actionType'
export default function hotReducer(state = {
  hotList: [],
  isFetching: false
}, action) {
  switch (action.type) {
    case HOT_GETBYPAGE:
      return {
        hotList: [],
        isFetching: true
      }
    case HOT_GETBYPAGE_SUCCESS:
    case HOT_ONREFRESH_SUCCESS:
      return {
        hotList: action.payload,
        isFetching: false
      }
    case HOT_GETBYPAGE_FALIED:
    case HOT_ONREFRESH_FAILED:
      return {
        ...state
      }
    case HOT_ONREFRESH:
      return {
        ...state
      }
    case HOT_SUPPORT_SUCCESS:
      return {
        ...state,
        hotList: [
          ...state.hotList.slice(0, action.payload.index),
          { ...action.payload.hot, supportNumber: action.payload.hot.supportNumber++ },
          ...state.hotList.slice(action.payload.index + 1),
        ]
      }
    case HOT_UNSUPPORT_FAILED:
      return {

      }
    default:
      return { ...state }
  }
}