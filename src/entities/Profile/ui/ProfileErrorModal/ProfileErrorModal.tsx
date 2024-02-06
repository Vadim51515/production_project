import React, { type FC } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../../../shared/hooks/useActions';
import { ErrorModal } from '../../../../shared/ui/ErrorModal';
import { profileActions } from '../../model/actions';
import { profileErrorSelector } from '../../model/selectors/selectors';

interface IProfileErrorModalProps {
    className?: string;
}

export const ProfileErrorModal: FC<IProfileErrorModalProps> = () => {
    const error = useSelector(profileErrorSelector);

    const { setError } = useActions(profileActions);

    return (
        <ErrorModal
            onClose={() => setError(undefined)}
            error={error}
        />
    );
};
