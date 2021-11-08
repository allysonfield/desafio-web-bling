import HttpErrorResponseModel from "@models/http-error-response-model"

const RequestMethod = {
  Get: 'GET',
  Post: 'POST',
  Put: 'PUT',
  Delete: 'DELETE',
  Options: 'OPTIONS',
  Head: 'HEAD',
  Patch: 'PATCH',
}

const get = async (instance, url) => request(instance, RequestMethod.Get, url)

const post = async (instance, url, data) => {
  const params = {
    data: { ...data },
  }

  return request(instance, RequestMethod.Post, url, params)
}

const postFormData = async (instance, url, formData, onUploadProgress) => {
  const params = {
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress,
  }

  return request(instance, RequestMethod.Post, url, params)
}

const put = async (instance, url, data) => {
  const params = {
    data: { ...data },
  }

  return request(instance, RequestMethod.Put, url, params)
}

const del = async (instance, url) => request(instance, RequestMethod.Delete, url)

const request = async (instance, method, url, params) => {
  try {
    const axiosRequestConfig = { method, url, ...params }
    const [axiosResponse] = await Promise.all([instance.request(axiosRequestConfig), delay()])
    const { status, request } = axiosResponse

    if (axiosResponse.data.success === false) {
      return fillInErrorWithDefaults(
        {
          status,
          message: axiosResponse.data.messages.length === 1 ? axiosResponse.data.messages[0] : axiosResponse.data.messages,
          errors: axiosResponse.data.messages,
          url: request ? request.responseURL : url,
          raw: axiosResponse,
        },
        { url }
      )
    }

    return axiosResponse.data.data
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      const { status, statusText, data } = error.response
      const errors = data.errors ? data.errors : [statusText]

      return fillInErrorWithDefaults(
        {
          status,
          message: data.title || statusText,
          errors,
          url: error.request.responseURL,
          raw: error.response,
        },
        { url }
      )
    } else if (error.request) {
      // The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
      const { status, statusText, responseURL } = error.request

      return fillInErrorWithDefaults(
        {
          status,
          message: statusText,
          errors: [statusText],
          url: responseURL,
          raw: error.request,
        },
        { url }
      )
    }

    // Something happened in setting up the request that triggered an Error
    return fillInErrorWithDefaults({
      status: 0,
      message: error.message,
      errors: [error.message],
      url: url,
      raw: error,
    })
  }
}

const fillInErrorWithDefaults = (error, request) => {
  const model = new HttpErrorResponseModel()

  model.status = error.status || 0
  model.message = error.message || 'Não foi possível completar sua requisição'
  model.errors = error.errors
  model.url = error.url || request.url
  model.raw = error.raw

  return model
}

const delay = (duration = 250) => {
  return new Promise(resolve => setTimeout(resolve, duration))
}

export { get, post, postFormData, put, del, request }
