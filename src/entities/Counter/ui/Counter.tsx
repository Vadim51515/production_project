import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useActions } from '../../../shared/hooks/useActions';
import { Button } from '../../../shared/ui/Button';
import { counterActions } from '../model/actions';
import { useCounterValue } from '../model/selectors/selectors';

export const Counter: FC = () => {
    const { increment, decrement } = useActions(counterActions);

    const value = useCounterValue();

    const { t } = useTranslation();

    return (
        <div>
            <h1 data-testid="counterValue">{value}</h1>
            <Button
                data-testid="counterIncrementBtn"
                onClick={() => {
                    increment();
                }}
            >
                {t('Добавить ')}
            </Button>
            <Button
                data-testid="counterDecrementBtn"
                onClick={() => {
                    decrement();
                }}
            >
                {t('Убавить')}
            </Button>
        </div>
    );
};
