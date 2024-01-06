import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'
import { RuntimeStatuses } from '../../../../shared/const/common'

export const articleDetailsCommentsIsLoadingSelector = (state: IStateSchema) => (
    state.articleDetailsComments?.status === RuntimeStatuses.Loading)
export const articleDetailsCommentsErrorSelector = (state: IStateSchema) => state.articleDetailsComments?.error
