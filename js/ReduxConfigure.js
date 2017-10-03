import { createStore } from 'redux'
import reducers from './reducers'

export default function reduxConFigure() {
  let store = createStore(reducers)
  return store
}