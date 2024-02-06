import React, { type FC } from 'react';
import { type Func } from '../../../../app/types';
import { Modal } from '../../Modal';
import { Text } from '../../Text';

interface IErrorModalProps {
    onClose: Func;
    error?: string;
}

export const ErrorModal: FC<IErrorModalProps> = ({ error, onClose }) => {
    return (
        <Modal
            headerProps={{ title: 'Произошла ошибка' }}
            isOpen={!!error}
            onClose={onClose}
        >
            <Text>{error}</Text>
        </Modal>
    );
};
