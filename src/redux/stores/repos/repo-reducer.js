import { produce } from 'immer'
import baseReducer from '@utils/base-reducer'


import * as Actions from './repo-actions'

export const initialState = {
  id: null,
  full_name: null,
  owner: {},
  description: '',
  stargazers_count: null,
  forks_count: null,
  issues: []
}

const repoReducer = baseReducer(initialState, {
  [Actions.REQUEST_GET_FINISHED](state, { payload } ) {
    return produce(state, draft => {
      draft.id = payload.id
      draft.full_name = payload.full_name
      draft.owner = payload.owner
      draft.description = payload.description
      draft.stargazers_count = payload.stargazers_count
      draft.forks_count = payload.forks_count
    })
  },
  [Actions.REQUEST_GET_ISSUES_FINISHED](state, { payload }) {
    return produce(state, draft => {
      draft.issues = payload
    })
  },
})

export default repoReducer
