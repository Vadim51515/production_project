import React, {
    type FC,
    memo
} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { userAuthDataSelector } from '../../../../../entities/User'

import {
    getRouteProfile
} from '../../../../../shared/constants/common'
import { Button } from '../../../../../shared/ui/Button'
import { Text } from '../../../../../shared/ui/Text'
import styles from './ProfileBtn.module.scss'
import defaultUserIcon from '@/shared/assets/icons/defaultUserIcon.png'

interface IProfileBtnProps {
    className?: string
    isCollapsedNavbar?: boolean
}

export const ProfileBtn: FC<IProfileBtnProps> = memo(({ className, isCollapsedNavbar }) => {
    const navigate = useNavigate()

    const authData = useSelector(userAuthDataSelector)

    const modsForText = {
        animationHideText: isCollapsedNavbar,
        animationShowText: !isCollapsedNavbar
    }

    return (
        <Button
            onClick={() => {
                if (authData?.id) {
                    navigate(getRouteProfile(authData?.id))
                }
            }}
            pattern='clear'
            className={classNames(styles.container, { [styles.collapsedContainer]: isCollapsedNavbar }, [className])}
        >
            <img
                className={styles.avatar}
                src={defaultUserIcon}
            />
            <div className={styles.textContainer}>
                <Text className={classNames(styles.name, modsForText)}>{authData?.username}</Text>
                <Text className={classNames(styles.role, modsForText)}>{authData?.roles?.[0]}</Text>
            </div>
        </Button>
    )
})
