import React, { type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useActions } from '../../../../shared/hooks/useActions'
import { useInitialEffect } from '../../../../shared/hooks/useInitialEffect'
import { profileActions } from '../../model/actions'
import { PersonalDataBlock } from '../PersonalDataBlock/PersonalDataBlock'
import { ProfileSettings } from '../ProfileSettings/ProfileSettings'
import styles from './ProfileCard.module.scss'

interface IProfileCardProps {
    className?: string
    id: string
}

export const ProfileCard: FC<IProfileCardProps> = ({ className, id }) => {
    const { fetchProfileData } = useActions(profileActions)

    useInitialEffect(() => {
        if (id) fetchProfileData(id)
    })
    return (
        <div className={classNames(styles.profileCard, {}, [className])}>
            <PersonalDataBlock />
            <ProfileSettings />
        </div>
    )
}
