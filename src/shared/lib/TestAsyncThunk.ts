import { type AsyncThunkAction } from '@reduxjs/toolkit'
import { type IStateSchema } from '../../app/providers/StoreProvider/config/stateSchema'
import { type Func } from '../../app/types'

export type TActionCreatorType<Return, Arg, RejectedValue> = Func<[Arg], AsyncThunkAction<Return, Arg, {
    rejectValue: RejectedValue
}>>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch = jest.fn()
    getState: Func<[], IStateSchema> = jest.fn()
    actionCreator: TActionCreatorType<Return, Arg, RejectedValue>

    constructor (actionCreator: TActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    async callThunk (arg: Arg) {
        const action = this.actionCreator(arg)
        const result = await action(this.dispatch, this.getState, undefined)

        return result
    }
}
