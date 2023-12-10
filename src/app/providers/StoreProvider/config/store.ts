import {
    configureStore,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import { counterReducer } from '../../../../entities/Counter'
import { userReducer } from '../../../../entities/User'
import { type IStateSchema } from './stateSchema'

export const createReduxStore = (preloadedState?: IStateSchema) => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducer
    }

    return configureStore<IStateSchema>({
        reducer: rootReducers,
        devTools: true,
        preloadedState
    })
}
