import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import rootReducer from './root-reducer'
import { errorNotificationMiddleware } from '../middlewares'

export default function rootStore(initialState, history) {
  const middleware = [thunk, routerMiddleware(history), errorNotificationMiddleware()].filter(Boolean)
  const composeEnhancers = composeWithDevTools({ trace: true })
  const store = createStore(rootReducer(history), initialState, composeEnhancers(applyMiddleware(...middleware)))
  return store
}
