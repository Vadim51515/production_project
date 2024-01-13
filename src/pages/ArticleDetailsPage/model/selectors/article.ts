import { createSelector } from '@reduxjs/toolkit'
import {
    userAuthDataSelector
} from 'entities/User'
import {
    articleDataSelector
} from 'entities/Article'

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
