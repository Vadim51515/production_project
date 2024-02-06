import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '../../../shared/ui/Text';
import { Page } from '../../../widgets/Page';

interface IForbiddenPageProps {
    className?: string;
}

const ForbiddenPage: FC<IForbiddenPageProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <Page
            className={classNames('', {}, [className])}
            dataTestId={'ForbiddenPage'}
        >
            <Text tag={'h1'}>{t('У вас нет доступа к данной странице')}</Text>
        </Page>
    );
};

export default ForbiddenPage;
