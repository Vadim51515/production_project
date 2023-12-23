import { type ReducersMapObject } from '@reduxjs/toolkit'
import React from 'react'
import { type Story } from '@storybook/react'
import { StoreProvider } from '../../../../app/providers/StoreProvider'
import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'
import { loginReducer } from '../../../../features/AuthByUsername/model/slice/loginSlice'
import { type TReducersList } from '../../../hooks/useAsyncReducer'

const defaultAsyncReducer: TReducersList = {
    login: loginReducer
}
export const storeDecorator = (
    state: DeepPartial<IStateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
) => (StoryComponent: Story) => {
    return (
        <StoreProvider
            initialState={state}
            asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}
        >
            <StoryComponent />
        </StoreProvider>
    )
}
