import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import task from '../stores/task/task/task-reducer'
import requesting from '../stores/requesting/requesting-reducer'
import error from '../stores/error/error-reducer'
import repo from '../stores/repos/repo-reducer'

const rootReducer = history => {
  const reducerMap = {
    router: connectRouter(history),
    requesting,
    error,
    task,
    repo,
  }

  return combineReducers(reducerMap)
}

export default rootReducer
