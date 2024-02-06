import { type ISharedState } from '../../../app/providers/StoreProvider';
import { type IArticle } from '../../../entities/Article';
import { type IComment } from '../../../entities/Comment';

export interface IArticleCommentsState extends ISharedState {
    data?: IComment[];
    ids: string[];
    entities: Record<string, IComment>;
}

export interface IArticleRecommendationState extends ISharedState {
    data?: IArticle[];
    ids: string[];
    entities: Record<string, IArticle>;
}
