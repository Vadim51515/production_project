import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'

export const userAuthDataSelector = (state: IStateSchema) => state.user.authData
