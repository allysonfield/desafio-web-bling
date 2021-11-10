import { produce } from 'immer'
import baseReducer from '../../../../utils/base-reducer'


import * as Actions from './task-actions'

export const initialState = {
 tasks: [],
}

const taskReducer = baseReducer(initialState, {
  [Actions.SET_DATA](state, { payload }) {
    return produce(state, draft => {
      draft.tasks.push(payload)
    })
  },
  [Actions.REQUEST_CRIAR](state, { payload }) {
    return produce(state, draft => {
      draft.tasks.push(payload)
    })
  },

  [Actions.REQUEST_CHECK](state, { payload: {id, value} }) {
    return produce(state, draft => {
      const index = state.tasks.findIndex((item) => item.id === id)
      
      draft.tasks[index].checked = !draft.tasks[index].checked;
    })
  },
  [Actions.REQUEST_DELETE](state, { payload: {id, value} }) {
    return produce(state, draft => {
      const index = state.tasks.findIndex((item) => item.id === id)
      draft.tasks.splice(index, 1)
    })
  },
})

export default taskReducer
