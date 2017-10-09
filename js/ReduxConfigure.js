import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer, rootEpic } from './reducers';
import logger from 'redux-logger';
const epicMiddleware = createEpicMiddleware(rootEpic);

export default function reduxConFigure() {
  let store = createStore(rootReducer, applyMiddleware(epicMiddleware,logger))
  return store
}