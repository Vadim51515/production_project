import { fetchArticleById } from './services/fetchArticleById/fetchArticleById'
import { articleDetailsSliceActions } from './slice/articleDetailsSlice'

export const articleDetailsActions = {
    ...articleDetailsSliceActions,
    fetchArticleById
}
