import HttpErrorResponseModel from '../model/http-error-response-model'
import * as HttpUtility from './http-utility'

function checkResponseErrors(response) {
  if (response instanceof HttpErrorResponseModel) {
    return response
  }

  return response
}

export async function get(instance, endpoint, config) {
  const response = await HttpUtility.get(instance, endpoint)
  console.log({response})
  return checkResponseErrors(response)
}

export async function post(instance, endpoint, data) {
  const response = await HttpUtility.post(instance, endpoint, data)
  return checkResponseErrors(response)
}

export async function put(instance, endpoint, data) {
  const response = await HttpUtility.put(instance, endpoint, data)
  return checkResponseErrors(response)
}

export async function del(instance, endpoint) {
  const response = await HttpUtility.del(instance, endpoint)
  return checkResponseErrors(response)
}

export async function postFormData(instance, endpoint, formData, onUploadProgress) {
  const response = await HttpUtility.postFormData(instance, endpoint, formData, onUploadProgress)
  return checkResponseErrors(response)
}

