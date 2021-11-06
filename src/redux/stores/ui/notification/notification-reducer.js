import { produce } from 'immer'
import baseReducer from '@utils/base-reducer'
import * as Actions from './notification-actions'

export const initialState = {
  hasUnread: false,
}

const notificationReducer = baseReducer(initialState, {
  [Actions.REQUEST_GET_HAS_UNREAD_NOTIFICATION_FINISHED](state, { payload: { success } }) {
    return produce(state, draft => {
      draft.hasUnread = success
    })
  },
})

export default notificationReducer
