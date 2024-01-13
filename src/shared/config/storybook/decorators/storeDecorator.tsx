import { type ReducersMapObject } from '@reduxjs/toolkit'
import React from 'react'
import { type Story } from '@storybook/react'
import { StoreProvider } from '../../../../app/providers/StoreProvider'
import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'
import { articleDetailsReducer } from '../../../../entities/Article'
import { profileReducer } from '../../../../entities/Profile'
import { addCommentReducer } from '../../../../features/addCommentForm/model/slices/addCommentFormSlice'
import { loginReducer } from '../../../../features/AuthByUsername/model/slice/loginSlice'
import { articleDetailsCommentsReducer } from '../../../../pages/ArticleDetailsPage'
import { articlesPageReducer } from '../../../../pages/ArticlesPage'
import { type TReducersList } from '../../../hooks/useAsyncReducer'

const defaultAsyncReducer: TReducersList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    addCommentForm: addCommentReducer,
    articlesPage: articlesPageReducer
}
export const storeDecorator = (
    state: DeepPartial<IStateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
) => (StoryComponent: Story) => {
    return (
        <StoreProvider
            initialState={state}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}
        >
            <StoryComponent />
        </StoreProvider>
    )
}
