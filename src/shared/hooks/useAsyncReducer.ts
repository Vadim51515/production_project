import { type Reducer } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import {
    useDispatch,
    useStore
} from 'react-redux'
import { type IReduxStoreWithManager } from '../../app/providers/StoreProvider'
import {
    type IStateKey,
    type IStateSchema
} from '../../app/providers/StoreProvider/config/stateSchema'

export type TReducersList = {
    [name in IStateKey]?: Reducer<NonNullable<IStateSchema[name]>>
}
export const useAsyncReducer = (reducers: TReducersList, removeAfterUnmount = false) => {
    const dispatch = useDispatch()
    const store = useStore() as IReduxStoreWithManager

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerName, reducer]) => {
            const reducersMap = store.reducerManager.getReducerMap()
            const hasMountedReducer = reducersMap[reducerName as IStateKey]

            if (!hasMountedReducer) {
                store.reducerManager.add(reducerName as IStateKey, reducer)
                dispatch({ type: `@INIT ${reducerName} reducer` })
            }
        })

        if (removeAfterUnmount) {
            return () => {
                Object.entries(reducers).forEach(([reducerName]) => {
                    store.reducerManager.remove(reducerName as IStateKey)
                    dispatch({ type: `@REMOVE ${reducerName} reducer` })
                })
            }
        }
    }, [])
}
