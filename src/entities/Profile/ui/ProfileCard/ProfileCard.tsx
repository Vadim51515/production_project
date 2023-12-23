import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { PersonalDataBlock } from '../PersonalDataBlock/PersonalDataBlock'
import { ProfileSettings } from '../ProfileSettings/ProfileSettings'
import styles from './ProfileCard.module.scss'

interface IProfileCardProps {
    className?: string
}

export const ProfileCard: FC<IProfileCardProps> = ({ className }) => {
    return (
        <div className={classNames(styles.profileCard, {}, [className])}>
            <PersonalDataBlock />
            <ProfileSettings />
        </div>
    )
}
