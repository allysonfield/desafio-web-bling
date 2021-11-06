import * as ActionUtility from '@utils/action-utility'

export const REMOVE = 'Error.REMOVE'

export function removeById(id) {
  return ActionUtility.createAction(REMOVE, id)
}

export const CLEAR_ALL = 'Error.CLEAR_ALL'

export function clearAll() {
  return ActionUtility.createAction(CLEAR_ALL)
}
