import { addCommentForArticle } from './services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from './services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { articleDetailsCommentsSliceActions } from './slices/articleDetailsCommentsSlice'

export const articleDetailsCommentsActions = {
    fetchCommentsByArticleId,
    addCommentForArticle,
    ...articleDetailsCommentsSliceActions
}
