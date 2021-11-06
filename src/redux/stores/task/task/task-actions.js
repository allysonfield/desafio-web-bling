import { push } from 'connected-react-router'

import * as ActionUtility from '@utils/action-utility'
import * as Effects from './task-effects'

export const REQUEST_CRIAR = 'Task.REQUEST_CRIAR'
export const REQUEST_CRIAR_FINISHED = 'Task.REQUEST_CRIAR_FINISHED'

export const REQUEST_GET = 'Task.REQUEST_GET'
export const REQUEST_GET_FINISHED = 'Task.REQUEST_GET_FINISHED'

export const REQUEST_ATUALIZAR_DADOS = 'Task.REQUEST_ATUALIZAR_DADOS'
export const REQUEST_ATUALIZAR_DADOS_FINISHED = 'Task.REQUEST_ATUALIZAR_DADOS_FINISHED'

export const REQUEST_DELETAR = 'Task.REQUEST_DELETAR'
export const REQUEST_DELETAR_FINISHED = 'Task.REQUEST_DELETAR_FINISHED'

export const REQUEST_OBTER_DOCUMENTOS = 'Task.REQUEST_OBTER_DOCUMENTOS'
export const REQUEST_OBTER_DOCUMENTOS_FINISHED = 'Task.REQUEST_OBTER_DOCUMENTOS_FINISHED'

export const REQUEST_UPLOAD_DOCUMENTO = 'Task.REQUEST_UPLOAD_DOCUMENTO'
export const REQUEST_UPLOAD_DOCUMENTO_FINISHED = 'Task.REQUEST_UPLOAD_DOCUMENTO_FINISHED'
export const REQUEST_UPLOAD_DOCUMENTO_SET_PROGRESS = 'Task.REQUEST_UPLOAD_DOCUMENTO_SET_PROGRESS'
export const REQUEST_UPLOAD_DOCUMENTO_ERROR = 'Task.REQUEST_UPLOAD_DOCUMENTO_ERROR'

export const REQUEST_DELETAR_DOCUMENTO = 'Task.REQUEST_DELETAR_DOCUMENTO'
export const REQUEST_DELETAR_DOCUMENTO_FINISHED = 'Task.REQUEST_DELETAR_DOCUMENTO_FINISHED'

export const SET_DATA = 'Task.SET_DATA'

export function setData(data) {
  return ActionUtility.createAction(SET_DATA, data)
}

export function criar() {
  return async (dispatch, getState) => {
    const {
      model: { id },
    } = await ActionUtility.createThunkEffect(dispatch, REQUEST_CRIAR, Effects.criar)

    dispatch(push(`${id}`))
  }
}

export function obter(taskId) {
  return async (dispatch, getState) => {
    ActionUtility.createThunkEffect(dispatch, REQUEST_GET, Effects.obter, taskId)
  }
}

export function atualizarDados(taskId, dados) {
  return async (dispatch, getState) => {
    return ActionUtility.createThunkEffect(dispatch, REQUEST_ATUALIZAR_DADOS, Effects.atualizarDados, taskId, dados)
  }
}

export function deletar(taskId, motivo) {
  return async (dispatch, getState) => {
    ActionUtility.createThunkEffect(dispatch, REQUEST_DELETAR, Effects.deletar, taskId, motivo)
  }
}

export function obterDocumentos(taskId) {
  return async (dispatch, getState) => {
    ActionUtility.createThunkEffect(dispatch, REQUEST_OBTER_DOCUMENTOS, Effects.obterDocumentos, taskId)
  }
}

export function criarDocumento(taskId, id, arquivo) {
  return async (dispatch, getState) => {
    ActionUtility.upload(dispatch, REQUEST_UPLOAD_DOCUMENTO, id, arquivo, Effects.criarDocumento, taskId)
  }
}

export function deletarDocumento(taskId, documentoId) {
  return async (dispatch, getState) => {
    await ActionUtility.createThunkEffect(dispatch, REQUEST_DELETAR_DOCUMENTO, Effects.deletarDocumento, taskId, documentoId)
  }
}
