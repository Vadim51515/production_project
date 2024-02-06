import React, { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../shared/ui/Button';

interface IBugButtonProps {
    className?: string;
}

export const BugButton: FC<IBugButtonProps> = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return <Button onClick={onThrow}>{t('throw error')}</Button>;
};
