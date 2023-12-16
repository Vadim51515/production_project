import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'

export const loginUsernameSelector = (state: IStateSchema) => state.login?.username ?? ''
export const loginPasswordSelector = (state: IStateSchema) => state.login?.password ?? ''
export const loginIsLoadingSelector = (state: IStateSchema) => state.login?.isLoading
export const loginErrorSelector = (state: IStateSchema) => state.login?.error
