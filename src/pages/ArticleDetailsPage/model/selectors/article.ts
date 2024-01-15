import { createSelector } from '@reduxjs/toolkit'
import { articleDataSelector } from '../../../../entities/Article'
import { userAuthDataSelector } from '../../../../entities/User'

export const getCanEditArticleSelector = createSelector(
    articleDataSelector,
    userAuthDataSelector,
    (article, user) => {
        if (!article || !user) {
            return false
        }

        return article.user.id === user.id
    }
)
