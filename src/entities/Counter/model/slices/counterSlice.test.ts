import { counterActions } from '../actions'
import {
    counterReducer,
    type ICounterState
} from './counterSlice'

describe('counterSlice', () => {
    const state: Partial<ICounterState> = {
        value: 10
    }

    test('Значение увеличится на 1', () => {
        expect(counterReducer(state as ICounterState, counterActions.increment())).toStrictEqual({ value: 11 })
    })

    test('Значение уменьшится на 1', () => {
        expect(counterReducer(state as ICounterState, counterActions.decrement())).toStrictEqual({ value: 9 })
    })

    test('Проверка пустого State', () => {
        expect(counterReducer(undefined, counterActions.increment())).toStrictEqual({ value: 1 })
    })
})
