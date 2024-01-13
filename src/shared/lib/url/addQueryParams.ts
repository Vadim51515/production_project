import { getQueryParams } from './getQueryParams'

/**
 * Функция добавления параметров строки запроса в URL
 * @param params
 */
export const addQueryParams = (params: TOptionalRecord<string, string>) => {
    window.history.pushState(null, '', getQueryParams(params))
}
