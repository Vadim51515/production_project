import { type Reducer } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import {
    useDispatch,
    useStore
} from 'react-redux'
import { type IReduxStoreWithManager } from '../../app/providers/StoreProvider'
import { type IStateKey } from '../../app/providers/StoreProvider/config/stateSchema'

export type TReducersList = {
    [key in IStateKey]?: Reducer
}
export const useAsyncReducer = (reducers: TReducersList, removeAfterUnmount = false) => {
    const dispatch = useDispatch()
    const store = useStore() as IReduxStoreWithManager

    useEffect(() => {
        console.log('useAsyncReducer', reducers)

        Object.entries(reducers).forEach(([reducerName, reducer]) => {
            console.log('reducerName', reducerName)
            console.log('reducer', reducer)
            store.reducerManager.add(reducerName as IStateKey, reducer)
            dispatch({ type: `@INIT ${reducerName} reducer` })
            console.log('dispatch')
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
