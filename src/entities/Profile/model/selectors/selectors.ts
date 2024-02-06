import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema';
import { RuntimeStatuses } from '../../../../shared/constants/common';
import { type TKeysProfile } from '../../types';

export const profileAvatarSelector = (state: IStateSchema) => state.profile?.data?.avatar;
export const profileIsLoadingSelector = (state: IStateSchema) => state.profile?.status === RuntimeStatuses.Loading;
export const profileIsReadonlySelector = (state: IStateSchema) => state.profile?.isReadonly;
export const profileDataSelector = (state: IStateSchema) => state.profile?.data;
export const profileErrorSelector = (state: IStateSchema) => state.profile?.error;
export const profileFormSelector = (state: IStateSchema) => state.profile?.form;
export const profileFieldErrorSelector = (state: IStateSchema, fieldName: TKeysProfile) => state.profile?.formErrors?.[fieldName];

export const profileFieldValue = (state: IStateSchema, fieldName: TKeysProfile) => {
    if (!state.profile?.isReadonly) return state.profile?.form?.[fieldName];
    else return state.profile?.data?.[fieldName];
};
