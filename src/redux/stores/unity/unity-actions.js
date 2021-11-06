import { push } from 'connected-react-router'

import * as ActionUtility from '@utils/action-utility'
import * as Effects from './unity-effects'

export const REQUEST_CRIAR = 'Unidade.REQUEST_CRIAR'
export const REQUEST_CRIAR_FINISHED = 'Unidade.REQUEST_CRIAR_FINISHED'

export const REQUEST_GET = 'Unidade.REQUEST_GET'
export const REQUEST_GET_FINISHED = 'Unidade.REQUEST_GET_FINISHED'

export const SET_DATA = 'UnidadeSET_DATA'

export function setData(data) {
  return ActionUtility.createAction(SET_DATA, data)
}

export function criar(data) {
  return async dispatch => {
    const {
      model: { id },
    } = await ActionUtility.createThunkEffect(dispatch, REQUEST_CRIAR, Effects.criar, data)

    dispatch(push(`${id}`))
  }
}

export function obter(taskId) {
  return async (dispatch, getState) => {
    return ActionUtility.createThunkEffect(dispatch, REQUEST_GET, Effects.obter, taskId)
  }
}
