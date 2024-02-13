import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../../../shared/ui/Button';
import { Text } from '../../../shared/ui/Text';
import styles from './PageError.module.scss';

interface IPageErrorProps {
    className?: string;
}

export const PageError: FC<IPageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.pageError, {}, [className])}>
            <Text
                tag={'h1'}
                withMarginBottom
            >
                {t('Произошла непредвиденная ошибка')}
            </Text>
            <Button
                onClick={() => {
                    location.reload();
                }}
            >
                {t('Перезагрузить страницу')}
            </Button>
        </div>
    );
};
