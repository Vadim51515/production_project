import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'
import {
    counterSelector,
    getCounterValue
} from './selectors'

describe('counter selectors', () => {
    const state: DeepPartial<IStateSchema> = {
        counter: {
            value: 10
        }
    }
    test('counterSelector возвращает корректное значение', () => {
        expect(counterSelector(state as IStateSchema)).toStrictEqual({ value: 10 })
    })

    test('counterValueSelector возвращает корректное значение', () => {
        expect(getCounterValue(state as IStateSchema)).toBe(10)
    })
})
