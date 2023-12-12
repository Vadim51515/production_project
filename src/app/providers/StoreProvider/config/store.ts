import {
    configureStore,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import { counterReducer } from '../../../../entities/Counter'
import { userReducer } from '../../../../entities/User'
import { loginReducer } from '../../../../features/AuthByUsername'
import { type IStateSchema } from './stateSchema'

export const createReduxStore = (preloadedState?: IStateSchema) => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducer,
        login: loginReducer
    }

    return configureStore<IStateSchema>({
        reducer: rootReducers,
        devTools: true,
        preloadedState
    })
}
