import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
// epics 
import login from './user/epics'
import { getByPage, onRefresh, support } from './hot/epics'

// reducers 
import userReducer from './user/reducer';
import hotReducer from './hot/reducer';

export const rootEpic = combineEpics(
    getByPage, onRefresh, support
);
export const rootReducer = combineReducers({
    userReducer, hotReducer
})
