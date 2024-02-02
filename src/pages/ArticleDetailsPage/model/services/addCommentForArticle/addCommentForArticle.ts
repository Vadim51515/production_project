import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkConfig } from '../../../../../app/providers/StoreProvider'
import { articleDataSelector } from '../../../../../entities/Article'
import { type IComment } from '../../../../../entities/Comment'
import { userAuthDataSelector } from '../../../../../entities/User'

import { ErrorsStatuses } from '../../../../../shared/constants/common'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<IComment, string, IThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (
        commentText,
        {
            dispatch,
            getState,
            extra,
            rejectWithValue
        }
    ) => {
        try {
            const state = getState()
            const userData = userAuthDataSelector(state)
            const articleData = articleDataSelector(state)

            if (!userData || !commentText || !articleData) {
                rejectWithValue('Ошибка')
            }

            const response = await extra.api.post('/comments', {
                articleId: articleData?.id,
                userId: userData?.id,
                text: commentText
            })

            const { data } = response

            if (!data) {
                throw new Error('Нет данных')
            }

            dispatch(fetchCommentsByArticleId(articleData?.id as string))

            return data
        } catch (e) {
            return rejectWithValue(ErrorsStatuses.ServerError)
        }
    }
)
