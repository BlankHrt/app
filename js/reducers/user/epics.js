import { Observable } from 'rxjs/Observable';
import {
  USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED,
  USER_LOGOUT, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAILED,
  USER_UPDATE, USER_UPDATE_SUCCESS, USER_UPDATE_FAILED
} from '../actionType'

export const login = (action$, store) => {
  return action$.ofType(USER_LOGIN)
    .switchMap(({ payload }) =>
      Observable
        .fromPromise(fetch(GLOBAL.BASE_URL + '/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Accept': 'application/json, text/plain, */*'
          },
          body: payload
        }).then(response =>
          response.text().then(function (text) {
            return text ? JSON.parse(text) : {}
          })
          ))
        .map(payload => {
          if (!payload.user || payload.error) {
            return {
              type: USER_LOGIN_FAILED
            }
          } else {
            global.storage.save({
              key: 'loginState',
              id: '1000',
              data: {
                ...payload,
                isLogin: true
              },
              expires: 1000 * 60 * 100
            })
            return {
              type: USER_LOGIN_SUCCESS,
              payload
            }
          }
        })
    );
}
