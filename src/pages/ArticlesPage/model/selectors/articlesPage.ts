import type { IStateSchema } from 'app/providers/StoreProvider/config/stateSchema'
import { ArticleType } from '../../../../entities/Article'
import { RuntimeStatuses } from '../../../../shared/const/common'

export const articlesPageLoadingSelector = (state: IStateSchema) => (
    state.articlesPage?.status === RuntimeStatuses.Loading)
export const articlesPageErrorSelector = (state: IStateSchema) => (
    state.articlesPage?.error)
export const articlesPageViewSelector = (state: IStateSchema) => (
    state.articlesPage?.view || 'list')

export const articlesPagePaginationPageSelector = (state: IStateSchema) => (
    state.articlesPage?.page || 1)

export const articlesPagePaginationLimitSelector = (state: IStateSchema) => (
    state.articlesPage?.limit)
export const articlesPagePaginationHasMoreSelector = (state: IStateSchema) => (
    state.articlesPage?.hasMore)

export const articlesPageIsInitSelector = (state: IStateSchema) => {
    if (state.articlesPage?.status) return state.articlesPage?.status !== RuntimeStatuses.BeforeInitial

    return false
}

export const articlesPageOrderSelector = (state: IStateSchema) => (
    state.articlesPage?.order || 'asc')
export const articlesPageSortFieldNameSelector = (state: IStateSchema) => (
    state.articlesPage?.sortFieldName || 'createdAt')
export const articlesPageSearchSelector = (state: IStateSchema) => (
    state.articlesPage?.search)
export const articlesPageTypeSelector = (state: IStateSchema) => (
    state.articlesPage?.type || ArticleType.All)
