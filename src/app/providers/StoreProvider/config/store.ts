import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '../../../../entities/Counter'
import { type IStateSchema } from './stateSchema'

export const createReduxStore = (preloadedState?: IStateSchema) => {
    return configureStore<IStateSchema>({
        reducer: {
            counter: counterReducer
        },
        devTools: true,
        preloadedState
    })
}
