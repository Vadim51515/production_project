import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import {
    type ActionCreatorsMapObject,
    bindActionCreators
} from 'redux'
import { type ThunkAction } from 'redux-thunk'

export type TUseActions<M extends ActionCreatorsMapObject<any>> = {
    [N in keyof M]: ReturnType<M[N]> extends ThunkAction<any, any, any, any>
        ? (...args: Parameters<M[N]>) => ReturnType<ReturnType<M[N]>>
        : M[N]
}
export const useActions = <T extends ActionCreatorsMapObject>(actions: T) => {
    const dispatch = useDispatch()
    return useMemo<TUseActions<T>>(() => bindActionCreators<any, T>(actions, dispatch), [actions, dispatch])
}
