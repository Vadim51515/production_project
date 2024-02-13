import { type Nullable } from '@vitest/utils';
import { type TFormErrors } from '../../../../app/types';
import { ErrorsStatuses } from '../../../../shared/constants/common';
import { type IProfile, type TKeysProfile } from '../../types';

export const validateProfileData = (profile: Nullable<Partial<IProfile>>) => {
    if (!profile) {
        return {};
    }

    const { firstName, surname, username } = profile;

    const formErrors: TFormErrors<TKeysProfile> = {};

    if (!firstName) {
        formErrors.firstName = ErrorsStatuses.FieldRequired;
    }

    if (!surname) {
        formErrors.surname = ErrorsStatuses.FieldRequired;
    }

    if (!username) {
        formErrors.username = ErrorsStatuses.FieldRequired;
    }

    return formErrors;
};
