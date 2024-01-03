import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'

export const userAuthDataSelector = (state: IStateSchema) => state.user.authData
export const isInitSelector = (state: IStateSchema) => state.user.isInit
