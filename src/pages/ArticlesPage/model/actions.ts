import { fetchArticleList } from './services/fetchArticleList'
import { fetchNextArticlePage } from './services/fetchNextArticlePage'
import { articlesPageSliceActions } from './slices/articlesPageSlice'

export const articlesPageActions = {
    ...articlesPageSliceActions,
    fetchArticleList,
    fetchNextArticlePage
}
