import { type ReducersMapObject } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import {
    type CFC
} from '../../../types'
import { type IStateSchema } from '../config/stateSchema'
import React from 'react'
import { createReduxStore } from '../config/store'

interface IStoreProvider {
    initialState?: DeepPartial<IStateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider: CFC<IStoreProvider> = ({
    children,
    initialState,
    asyncReducers
}) => {
    const store = createReduxStore(
        initialState as IStateSchema,
        asyncReducers
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
