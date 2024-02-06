import type { ISharedState } from '../../../app/providers/StoreProvider';
import { type TSortOrder } from '../../../app/types';
import { type ArticleType, type IArticle, type TArticleViewType } from '../../../entities/Article';
import { type TArticleSortField } from '../../../entities/Article/model/types';

export interface IArticlesPageState extends ISharedState {
    view: TArticleViewType;
    ids: string[];
    entities: Record<string, IArticle>;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    order: TSortOrder;
    sortFieldName: TArticleSortField;
    search: string;
    type: ArticleType;
}
