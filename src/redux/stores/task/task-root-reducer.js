import { combineReducers } from 'redux'

import taskReducer from './task/task-reducer';

const taskRootReducer = combineReducers({
  main: taskReducer
})

export default taskRootReducer
