import {
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject,
    type UnknownAction
} from '@reduxjs/toolkit'
import type { To } from '@remix-run/router'
import { type AxiosInstance } from 'axios'
import type { NavigateOptions } from 'react-router/dist/lib/context'
import { type ICounterState } from '../../../../entities/Counter'
import { type IProfileState } from '../../../../entities/Profile'
import { type IUserState } from '../../../../entities/User'
import { type ILoginState } from '../../../../features/AuthByUsername'
import { type RuntimeStatuses } from '../../../../shared/const/common'
import type {
    Func,
    TFormErrors
} from '../../../types'

export interface IStateSchema {
    counter: ICounterState
    user: IUserState

    // Асинхронные редюсеры
    login?: ILoginState
    profile?: IProfileState
}

export type IStateKey = keyof IStateSchema

export interface IReducerManager {
    getReducerMap: Func<[], ReducersMapObject<IStateSchema>>
    reduce: Func<[IStateSchema?, UnknownAction?], IStateSchema>
    add: Func<[IStateKey, Reducer]>
    remove: Func<[IStateKey]>
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager

    addModule: (key: string, reducer: Reducer, isReplace?: boolean) => void
    removeModule: (key: string) => void
}

export interface ISharedState {
    status: RuntimeStatuses
    error?: string
    formErrors?: TFormErrors<string>
}

export interface IThunkExtraArg {
    api: AxiosInstance
    navigate?: Func<[To, NavigateOptions?]>
}

export interface IThunkConfig<T> {
    rejectValue: T
    extra: IThunkExtraArg
    state: IStateSchema
}
