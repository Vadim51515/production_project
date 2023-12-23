import { type AsyncThunkAction } from '@reduxjs/toolkit'
import axios, { type AxiosStatic } from 'axios'
import { type IStateSchema } from '../../app/providers/StoreProvider/config/stateSchema'
import { type Func } from '../../app/types'

export type TActionCreatorType<Return, Arg, RejectedValue> = Func<[Arg], AsyncThunkAction<Return, Arg, {
    rejectValue: RejectedValue
}>>

jest.mock('axios')

const mockedAxios = jest.mocked(axios, { shallow: false })

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch = jest.fn()
    getState: Func<[], IStateSchema> = jest.fn()
    actionCreator: TActionCreatorType<Return, Arg, RejectedValue>
    api: jest.MockedFunctionDeep<AxiosStatic>
    navigate: jest.MockedFn<any>

    constructor (actionCreator: TActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()

        this.api = mockedAxios
        this.navigate = jest.fn()
    }

    async callThunk (arg: Arg) {
        const action = this.actionCreator(arg)
        const result = await action(
            this.dispatch,
            this.getState,
            {
                api: this.api,
                navigate: this.navigate
            }
        )

        return result
    }
}
