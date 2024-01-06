import { fetchCommentsByArticleId } from './services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { articleDetailsCommentsSliceActions } from './slices/articleDetailsCommentsSlice'

export const articleDetailsCommentsActions = {
    fetchCommentsByArticleId,
    ...articleDetailsCommentsSliceActions
}
