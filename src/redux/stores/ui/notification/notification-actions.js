import { v4 as uuidv4 } from 'uuid'
import { ActionUtility } from '@utils'

export const ADD_NOTIFICATION = 'NotificationActions.ADD_NOTIFICATION'
export const REMOVE_NOTIFICATION = 'NotificationActions.REMOVE_NOTIFICATION'

export function add(description, message, type) {
  return ActionUtility.createAction(ADD_NOTIFICATION, {
    description,
    message,
    type,
    id: uuidv4(),
  })
}

export function removeById(toastId) {
  return ActionUtility.createAction(REMOVE_NOTIFICATION, toastId)
}
