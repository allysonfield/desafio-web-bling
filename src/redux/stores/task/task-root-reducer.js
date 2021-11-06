import { combineReducers } from 'redux'

import taskReducer from '@redux/stores/task/task/task-reducer'
import trainingReducer from '@redux/stores/task/training/training-check-reducer'
import checkReducer from '@redux/stores/task/check/task-check-reducer'
import gamificationReducer from '@redux/stores/task/gamification/gamification-reducer'
import agendamentoReducer from '@redux/stores/task/agendamento/agendamento-reducer'
import userReducer from '@redux/stores/task/user/user-reducer'
import userGroupReducer from '@redux/stores/grupo-user/grupo-user-reducer'

const taskRootReducer = combineReducers({
  main: taskReducer,
  training: trainingReducer,
  check: checkReducer,
  gamification: gamificationReducer,
  agendamento: agendamentoReducer,
  user: userReducer,
  userGroup: userGroupReducer,
})

export default taskRootReducer
