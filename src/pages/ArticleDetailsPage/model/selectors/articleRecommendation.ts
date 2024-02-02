import type { IStateSchema } from '@/app/providers/StoreProvider/config/stateSchema'
import { RuntimeStatuses } from '../../../../shared/constants/common'

export const articleRecommendationLoadingSelector = (state: IStateSchema) => (
    state.articleRecommendation?.status === RuntimeStatuses.Loading)
export const articleRecommendationErrorSelector = (state: IStateSchema) => (
    state.articleRecommendation?.error)

export const articleRecommendationDataSelector = (state: IStateSchema) => (
    state.articleRecommendation?.data)
