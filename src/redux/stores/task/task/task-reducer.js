import { produce } from 'immer'
import baseReducer from '../../../../utils/base-reducer'


import * as Actions from './task-actions'
import { indexOfId } from '@utils/object-utility'

export const initialState = {
 tasks: [],
}

const taskReducer = baseReducer(initialState, {
  [Actions.SET_DATA](state, { payload }) {
    return produce(state, draft => {
      draft.tasks.push(payload)
    })
  },
})

export default taskReducer
