import { combineReducers } from 'redux'

import taskReducer from '@redux/stores/task/task/task-reducer';

const taskRootReducer = combineReducers({
  main: taskReducer
})

export default taskRootReducer
