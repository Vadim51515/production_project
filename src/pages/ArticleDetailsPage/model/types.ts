import { type ISharedState } from '../../../app/providers/StoreProvider'
import { type IComment } from '../../../entities/Comment'

export interface IArticleCommentsState extends ISharedState {
    data?: IComment[]
    ids: string[]
    entities: Record<string, IComment>
}
