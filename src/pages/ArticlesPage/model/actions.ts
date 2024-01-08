import { fetchArticleList } from './services/fetchArticleList'
import { articlesPageSliceActions } from './slices/articlesPageSlice'

export const articlesPageActions = {
    ...articlesPageSliceActions,
    fetchArticleList
}
