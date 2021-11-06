import * as EffectUtility from '@utils/effect-utility'
import taskApi from '@services/task-api'
import { Endpoints } from '@constants/'

export async function criar(values) {
  return EffectUtility.post(taskApi, Endpoints.TasksAPI.Unidade.Criar, values)
}

export async function obter(taskId) {
  return EffectUtility.get(taskApi, Endpoints.TasksAPI.Unidade.Obter.replace(':taskId', taskId))
}
