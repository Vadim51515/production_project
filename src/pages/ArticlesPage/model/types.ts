import type { ISharedState } from '../../../app/providers/StoreProvider'
import {
    type IArticle,
    type TArticleViewType
} from '../../../entities/Article'

export interface IArticlesPageState extends ISharedState {
    view: TArticleViewType
    ids: string[]
    entities: Record<string, IArticle>
}
