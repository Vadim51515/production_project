import {
    configureStore,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import { counterReducer } from '../../../../entities/Counter'
import { userReducer } from '../../../../entities/User'
import type { DeepPartial } from '../../../types'
import { createReducerManager } from './reducerManager'
import { type IStateSchema } from './stateSchema'

export type TAppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export const createReduxStore = (
    preloadedState?: IStateSchema,
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
) => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
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
