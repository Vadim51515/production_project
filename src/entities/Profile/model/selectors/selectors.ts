import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'
import { RuntimeStatuses } from '../../../../shared/const/common'

export const profileDataSelector = (state: IStateSchema) => state.profile?.data
export const profileFirstNameSelector = (state: IStateSchema) => state.profile?.data?.firstName
export const profileSurnameSelector = (state: IStateSchema) => state.profile?.data?.surname
export const profileAvatarSelector = (state: IStateSchema) => state.profile?.data?.avatar

export const profileisLoadingSelector = (state: IStateSchema) => state.profile?.status === RuntimeStatuses.Loading
export const profileErrorSelector = (state: IStateSchema) => state.profile?.error
export const profileIsReadonlySelector = (state: IStateSchema) => state.profile?.isReadonly
