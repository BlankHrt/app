import { Observable } from 'rxjs/Observable';
import { USER_LOGIN, USER_LOGOUT, USER_UPDATE } from '../actionType'

export const login = (action$, store) =>
  action$.ofType(USER_LOGIN)
    .mergeMap(({ data }) =>
      fetch(GLOBAL.BASE_URL + '/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Accept': 'application/json, text/plain, */*'
        },
        body: data
      })
        .map(response => ({
          type: USER_LOGIN,
          payload: response
        }))
    );
