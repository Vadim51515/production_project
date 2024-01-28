import {
    useEffect
} from 'react'
import {
    useDispatch,
    useStore
} from 'react-redux'
import { type IReduxStoreWithManager } from '../../../../app/providers/StoreProvider'
import { type IStateKey } from '../../../../app/providers/StoreProvider/config/stateSchema'
import { type CFC } from '../../../../app/types'
import { type TReducersList } from '../../../hooks/useAsyncReducer'

interface DynamicModuleLoaderProps {
    reducers: TReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: CFC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount
    } = props

    const store = useStore() as IReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as IStateKey, reducer)
            dispatch({ type: `@INIT ${name} reducer` })
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as IStateKey)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}
