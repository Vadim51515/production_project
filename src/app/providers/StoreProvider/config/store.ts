import {
    configureStore,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import { counterReducer } from '../../../../entities/Counter'
import { userReducer } from '../../../../entities/User'
import { createReducerManager } from './reducerManager'
import { type IStateSchema } from './stateSchema'

export const createReduxStore = (preloadedState?: IStateSchema) => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore<IStateSchema>({
        reducer: reducerManager.reduce,
        devTools: true,
        preloadedState
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}
