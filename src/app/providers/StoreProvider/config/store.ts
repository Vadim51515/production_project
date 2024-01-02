import {
    configureStore,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import type { To } from '@remix-run/router'
import type { NavigateOptions } from 'react-router/dist/lib/context'
import { counterReducer } from '../../../../entities/Counter'
import { userReducer } from '../../../../entities/User'
import { $api } from '../../../../shared/api/api'
import type {
    Func
} from '../../../types'
import { createReducerManager } from './reducerManager'
import {
    type IStateSchema,
    type IThunkExtraArg
} from './stateSchema'

export type TAppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export const createReduxStore = (
    preloadedState?: IStateSchema,
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>,
    navigate?: Func<[To, NavigateOptions?]>
) => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducers)

    const extraArg: IThunkExtraArg = {
        api: $api,
        navigate
    }

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: true,
        preloadedState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            }
        })
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}
