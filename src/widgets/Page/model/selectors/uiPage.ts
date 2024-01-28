import type { IStateSchema } from '@/app/providers/StoreProvider/config/stateSchema'
import { RuntimeStatuses } from '@/shared/const/common'

export const uiPageLoadingSelector = (state: IStateSchema) => (
    state.uiPage?.status === RuntimeStatuses.Loading)

export const uiPageScrollByPathSelector = (state: IStateSchema, path: string) => (
    state.uiPage.scroll[path] || 0
)
