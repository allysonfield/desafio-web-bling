

import * as ActionUtility from '../../../../utils/action-utility'
import {v4 as uuidv4} from 'uuid'

export const REQUEST_CRIAR = 'Task.REQUEST_CRIAR'
export const REQUEST_CHECK = 'Task.REQUEST_CHECK'
export const REQUEST_DELETE = 'Task.REQUEST_DELETE'


export const SET_DATA = 'Task.SET_DATA'

export function setData(data) {
  return ActionUtility.createAction(SET_DATA, data)
}

export function criar(name) {
  return async (dispatch, getState) => {
    const data = {
      id: uuidv4(),
      name,
      date: new Date(),
      checked: false
    }
    dispatch(ActionUtility.createAction(REQUEST_CRIAR, data))
  }
}

export function check(id) {
  return async (dispatch, getState) => {
    dispatch(ActionUtility.createAction(REQUEST_CHECK, {id}))
  }
}

export function deleteTask(id) {
  return async (dispatch, getState) => {
    dispatch(ActionUtility.createAction(REQUEST_DELETE, {id}))
  }
}
