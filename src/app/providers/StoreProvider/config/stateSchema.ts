import { type ICounterState } from '../../../../entities/Counter'
import { type IUserState } from '../../../../entities/User'

export interface IStateSchema {
    counter: ICounterState
    user: IUserState
}
