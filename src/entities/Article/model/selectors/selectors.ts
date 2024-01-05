import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'
import { RuntimeStatuses } from '../../../../shared/const/common'

export const articleIsLoadingSelector = (state: IStateSchema) => (
    state.articleDetails?.status === RuntimeStatuses.Loading)
export const articleDataSelector = (state: IStateSchema) => state.articleDetails?.data
export const articleErrorSelector = (state: IStateSchema) => state.articleDetails?.error
