import React, { type FC } from 'react'
import { classNames } from '../../../shared/lib/classNames/classNames'
import { LoginButton } from '../../LoginButton'
import styles from './ProfileButton.module.scss'

interface IProfileButtonProps {
    className?: string
}

const isAuth = false

export const ProfileButton: FC<IProfileButtonProps> = ({ className }) => {
    if (!isAuth) return <LoginButton />
    return (
        <div className={classNames(styles.ProfileButtonContainer, {}, [className])}>

        </div>
    )
}
