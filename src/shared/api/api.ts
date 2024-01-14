import axios from 'axios'
import { lStorage } from '../../helpers/function/lStorage'
import { USER_LOCAL_STORAGE_KEY } from '../const/localStorage'

export const $api = axios.create({
    baseURL: __API__
})
$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = lStorage.get(USER_LOCAL_STORAGE_KEY) || ''
    }
    return config
})
