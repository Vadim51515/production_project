import { Provider } from 'react-redux'
import {
    type CFC,
    type DeepPartial
} from '../../../types'
import { type IStateSchema } from '../config/stateSchema'
import React from 'react'
import { createReduxStore } from '../config/store'

interface IStoreProvider {
    initialState?: DeepPartial<IStateSchema>
}
export const StoreProvider: CFC<IStoreProvider> = ({ children, initialState }) => {
    const store = createReduxStore(initialState as IStateSchema)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
