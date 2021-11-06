import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import task from '@redux/stores/task/task-root-reducer'
import notification from '@redux/stores/notification/notification-reducer'
import requesting from '@redux/stores/requesting/requesting-reducer'
import error from '@redux/stores/error/error-reducer'

const rootReducer = history => {
  const reducerMap = {
    router: connectRouter(history),
    notification,
    requesting,
    error,
    task,
  }

  return combineReducers(reducerMap)
}

export default rootReducer
