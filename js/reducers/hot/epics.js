import { Observable } from 'rxjs/Observable';
import {
  HOT_GETBYPAGE, HOT_GETBYPAGE_SUCCESS, HOT_GETBYPAGE_FALIED,
  HOT_ONREFRESH, HOT_ONREFRESH_SUCCESS, HOT_ONREFRESH_FAILED,
  HOT_GETBYID,
  HOT_SUPPORT,
  HOT_UNSUPPORT
} from '../actionType'
import { ActionsObservable } from 'redux-observable';

const api = {
  getByPage: action => {
    const request = fetch(GLOBAL.BASE_URL + '/article/getArticleByPage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Accept': 'application/json, text/plain, */*'
      },
      body: action.data
    })
      .catch(error => {
        alert(error);
        return {
          type: HOT_GETBYPAGE_FALIED
        }
      }).then(response =>
        response.text().then(function (text) {
          return text ? JSON.parse(text) : []
        }))
      .catch(error => Observable.of({
        type: HOT_ONREFRESH_FAILED
      }))
    return Observable.from(request);
  }
};

export const getByPage = (action$, store) => {
  return action$.ofType(HOT_GETBYPAGE)
    .switchMap(action =>
      Observable
        .fromPromise(fetch(GLOBAL.BASE_URL + '/article/getArticleByPage', {
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
              type: HOT_GETBYPAGE_FALIED
            }
          }
          return {
            type: HOT_GETBYPAGE_SUCCESS,
            payload: payload
          }
        })
    );
}

export const onRefresh = (action$, store) => {
  return action$.ofType(HOT_ONREFRESH)
    .switchMap(action =>
      Observable
        .fromPromise(fetch(GLOBAL.BASE_URL + '/article/getArticleByPage', {
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
              type: HOT_ONREFRESH_FAILED
            }
          }
          return {
            type: HOT_ONREFRESH_SUCCESS,
            payload: payload
          }
        })
    );
}






