import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '../../../shared/ui/Text'

interface IForbiddenPageProps {
    className?: string
}

const ForbiddenPage: FC<IForbiddenPageProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames('', {}, [className])}>
            <Text tag={'h1'}>{t('У вас нет доступа к данной странице')}</Text>
        </div>
    )
}

export default ForbiddenPage
