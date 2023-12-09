import { createSelector } from 'reselect'
import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'
import type { ICounterState } from '../slices/counterSlice'

export const counterSelector = (state: IStateSchema) => state.counter

export const counterValueSelector = createSelector(
    counterSelector,
    (counter: ICounterState) => counter.value
)
