import type { IStateSchema } from 'app/providers/StoreProvider/config/stateSchema'
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
