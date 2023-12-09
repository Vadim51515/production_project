import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'
import {
    counterSelector,
    counterValueSelector
} from './selectors'

describe('counter selectors', () => {
    const state: Partial<IStateSchema> = {
        counter: {
            value: 10
        }
    }
    test('counterSelector возвращает корректное значение', () => {
        expect(counterSelector(state as IStateSchema)).toStrictEqual({ value: 10 })
    })

    test('counterValueSelector возвращает корректное значение', () => {
        expect(counterValueSelector(state as IStateSchema)).toBe(10)
    })
})
