import axios from 'axios'

import { GITHUB_API_BASE_URI } from '../config' 

const github_api = axios.create({ baseURL: GITHUB_API_BASE_URI })

export default github_api;