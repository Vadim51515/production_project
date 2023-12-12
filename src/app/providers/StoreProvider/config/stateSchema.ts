import { type ICounterState } from '../../../../entities/Counter'
import { type IUserState } from '../../../../entities/User'
import { type ILoginState } from '../../../../features/AuthByUsername'

export interface IStateSchema {
    counter: ICounterState
    user: IUserState
    login: ILoginState
}
