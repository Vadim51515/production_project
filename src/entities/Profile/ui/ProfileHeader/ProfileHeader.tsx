import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text } from '../../../../shared/ui/Text'
import { ProfileActionControls } from '../ProfileActionControls/ProfileActionControls'
import styles from './ProfileHeader.module.scss'

interface IProfileHeaderProps {
    className?: string
}

export const ProfileHeader: FC<IProfileHeaderProps> = () => {
    const { t } = useTranslation()

    return (
        <div className={classNames('pageTitleContainer', {}, [styles.titleContainer])}>
            <Text tag='h1'>{t('Профиль')}</Text>
            <ProfileActionControls />
        </div>
    )
}
