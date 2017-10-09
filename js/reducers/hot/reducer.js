import {
  HOT_GETBYPAGE, HOT_GETBYPAGE_SUCCESS, HOT_GETBYPAGE_FALIED,
  HOT_ONREFRESH, HOT_ONREFRESH_SUCCESS, HOT_ONREFRESH_FAILED,
  HOT_GETBYID,
  HOT_SUPPORT,
  HOT_UNSUPPORT
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
        ...state,
        isFetching: false
      }
    case HOT_ONREFRESH:
      return {
        ...state,
        isFetching: false
      }
    case HOT_GETBYID:
      return {
        Hot: action.payload
      }
    case HOT_SUPPORT:
      return {

      }
    case HOT_UNSUPPORT:
      return {

      }
    default:
      return state
  }
}