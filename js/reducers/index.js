import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
// epics 
import {login} from './user/epics'
import { getByPage, onRefresh, support } from './hot/epics'
import { getActivityByPage,onActivityRefresh } from './activity/epics'

// reducers 
import userReducer from './user/reducer';
import hotReducer from './hot/reducer';
import activityReducer from './activity/reducer';

export const rootEpic = combineEpics(
    login,
    getByPage, onRefresh, support,
    getActivityByPage, onActivityRefresh
);
export const rootReducer = combineReducers({
    userReducer, hotReducer, activityReducer
})
