import axios from 'axios'

import { USER_API_BASE_URI } from '@config' 

const api = axios.create({ baseURL: USER_API_BASE_URI })
api.defaults.headers.common['Content-Type'] = 'application/json'

export default api
