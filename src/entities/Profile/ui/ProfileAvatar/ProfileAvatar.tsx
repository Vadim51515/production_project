import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import {
    profileAvatarSelector
} from '../../model/selectors/selectors'
import styles from './ProfileAvatar.module.scss'
import defaultUserIcon from 'shared/assets/icons/defaultUserIcon.png'

interface IProfileAvatarProps {
    className?: string
}

export const ProfileAvatar: FC<IProfileAvatarProps> = ({ className }) => {
    const avatar = useSelector(profileAvatarSelector)
    const { t } = useTranslation('profile')

    return (
        <div className={classNames(styles.profileAvatarContainer, {}, [className])}>
            <img
                className={styles.profileAvatar}
                src={avatar || defaultUserIcon}
                alt={t('Иконка профиля')}
            />
        </div>
    )
}
