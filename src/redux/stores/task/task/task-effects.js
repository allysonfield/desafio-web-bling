import * as EffectUtility from '@utils/effect-utility'
import taskApi from '@services/task-api'
import { Endpoints } from '@constants'

export async function criar() {
  return EffectUtility.post(taskApi, Endpoints.TasksAPI.Task.Criar)
}

export async function obter(taskId) {
  return EffectUtility.get(taskApi, Endpoints.TasksAPI.Task.Obter.replace(':taskId', taskId))
}

export async function atualizarDados(taskId, dados) {
  return EffectUtility.put(
    taskApi,
    Endpoints.TasksAPI.Task
      .AtualizarDados
        .replace(':taskId', taskId), dados)
}

export async function deletar(taskId, motivo) {
  return EffectUtility.del(taskApi, Endpoints.TasksAPI.Task.Deletar.replace(':taskId', taskId).replace(':motivo', motivo))
}

export async function obterDocumentos(taskId) {
  return EffectUtility.get(taskApi, Endpoints.TasksAPI.Documento.Obter.replace(':taskId', taskId))
}

export async function criarDocumento(formData, onUploadProgress, taskId) {
  return EffectUtility.postFormData(taskApi, Endpoints.TasksAPI.Documento.Criar.replace(':taskId', taskId), formData, onUploadProgress)
}

export async function deletarDocumento(taskId, documentoId) {
  return EffectUtility.del(taskApi, Endpoints.TasksAPI.Documento.Deletar.replace(':taskId', taskId).replace(':documentoId', documentoId))
}
