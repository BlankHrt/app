import {
  ACTIVITY_GETBYPAGE,ACTIVITY_GETBYPAGE_SUCCESS,ACTIVITY_GETBYPAGE_FALIED,
  ACTIVITY_ONREFRESH,ACTIVITY_ONREFRESH_SUCCESS,ACTIVITY_ONREFRESH_FAILED,
  ACTIVITY_SUPPORT, ACTIVITY_SUPPORT_SUCCESS, ACTIVITY_SUPPORT_FAILED,
  ACTIVITY_UNSUPPORT, ACTIVITY_UNSUPPORT_SUCCESS, ACTIVITY_UNSUPPORT_FAILED
} from '../actionType'
export default function activityReducer(state = {
  activityList: [],
  isFetching: false
}, action) {
  switch (action.type) {
    case ACTIVITY_GETBYPAGE_SUCCESS:
      return {
        activityList: action.payload,
        isFetching: false
      }
    default:
      return { ...state }
  }
}