import { Observable } from 'rxjs/Observable';
import {
  ACTIVITY_GETBYPAGE, ACTIVITY_GETBYPAGE_SUCCESS, ACTIVITY_GETBYPAGE_FALIED,
  ACTIVITY_ONREFRESH, ACTIVITY_ONREFRESH_SUCCESS, ACTIVITY_ONREFRESH_FAILED,
  ACTIVITY_SUPPORT, ACTIVITY_SUPPORT_SUCCESS, ACTIVITY_SUPPORT_FAILED,
  ACTIVITY_UNSUPPORT, ACTIVITY_UNSUPPORT_SUCCESS, ACTIVITY_UNSUPPORT_FAILED
} from '../actionType'
import { ActionsObservable } from 'redux-observable';

export const getActivityByPage = (action$, store) => {
  return action$.ofType(ACTIVITY_GETBYPAGE)
    .switchMap(action =>
      Observable
        .fromPromise(fetch(GLOBAL.BASE_URL + '/activity/getActivityByPage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Accept': 'application/json, text/plain, */*'
          },
          body: action.data
        }).then(response =>
          response.text().then(function (text) {
            return text ? JSON.parse(text) : []
          })))
        .map(payload => {
          if (payload.error) {
            console.log(payload)
            return {
              type: ACTIVITY_GETBYPAGE_FALIED
            }
          }
          return {
            type: ACTIVITY_GETBYPAGE_SUCCESS,
            payload: payload
          }
        })
    );
}
export const onActivityRefresh = (action$, store) => {
  return action$.ofType(ACTIVITY_ONREFRESH)
    .switchMap(action =>
      Observable
        .fromPromise(fetch(GLOBAL.BASE_URL + '/activity/getActivityByPage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Accept': 'application/json, text/plain, */*'
          },
          body: action.data
        }).then(response =>
          response.text().then(function (text) {
            return text ? JSON.parse(text) : []
          })
          ))
        .map(payload => {
          if (payload.error) {
            console.log(payload)
            return {
              type: ACTIVITY_ONREFRESH_FAILED
            }
          }
          return {
            type: ACTIVITY_ONREFRESH_SUCCESS,
            payload: payload
          }
        })
    );
}
export const support = (action$, store) => {
  return action$.ofType(ACTIVITY_SUPPORT)
    .switchMap(({ data }) =>
      Observable
        .fromPromise(fetch(GLOBAL.BASE_URL + '/activity/support', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Accept': 'application/json, text/plain, */*'
          },
          body: data.uri
        }).then(response =>
          response.text().then(function (text) {
            return text ? JSON.parse(text) : []
          })
          ))
        .map(payload => {
          if (payload.error) {
            console.log(payload)
            return {
              type: ACTIVITY_SUPPORT_FAILED
            }
          }
          return {
            type: ACTIVITY_SUPPORT_SUCCESS,
            payload: data
          }
        })
    );
}




