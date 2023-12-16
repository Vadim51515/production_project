import {
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject,
    type UnknownAction
} from '@reduxjs/toolkit'
import { type ICounterState } from '../../../../entities/Counter'
import { type IUserState } from '../../../../entities/User'
import { type ILoginState } from '../../../../features/AuthByUsername'
import type { Func } from '../../../types'

export interface IStateSchema {
    counter: ICounterState
    user: IUserState

    // Асинхронные редюсеры
    login?: ILoginState
}

export type IStateKey = keyof IStateSchema

export interface IReducerManager {
    getReducerMap: Func<[], ReducersMapObject<IStateSchema>>
    reduce: Func<[IStateSchema, UnknownAction], IStateSchema>
    add: Func<[IStateKey, Reducer]>
    remove: Func<[IStateKey]>
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager

    addModule: (key: string, reducer: Reducer, isReplace?: boolean) => void
    removeModule: (key: string) => void
}
