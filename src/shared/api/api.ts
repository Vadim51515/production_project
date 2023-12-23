import axios from 'axios'
import { lStorage } from '../../helpers/function/lStorage'
import { USER_LOCAL_STORAGE_KEY } from '../const/localStorage'

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: lStorage.get(USER_LOCAL_STORAGE_KEY)
    }
})
