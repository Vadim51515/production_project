import { type ReducersMapObject } from '@reduxjs/toolkit'
import React from 'react'
import { type Story } from '@storybook/react'
import { StoreProvider } from '../../../../app/providers/StoreProvider'
import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'
import type { DeepPartial } from '../../../../app/types'
import { loginReducer } from '../../../../features/AuthByUsername/model/slice/loginSlice'

const defaultAsyncReducer: DeepPartial<ReducersMapObject<IStateSchema>> = {
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
