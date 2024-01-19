import React, { type FC } from 'react'
import { useSelector } from 'react-redux'
import { userAuthDataSelector } from '../../../entities/User'
import { Avatar } from '../../../shared/ui/Avatar/ui/Avatar'
import { Dropdown } from '../../../shared/ui/Dropdown/Dropdown'
import { ThemeSwitcher } from '../../ThemeSwitcher'
import styles from './Header.module.scss'

export const Header: FC = () => {
    const userAuthData = useSelector(userAuthDataSelector)

    const options = [
        {
            label: 'Item под номером 1',
            value: 'Item под номером 1'
        },
        {
            label: 'Item под номером 2',
            value: 'Item под номером 2'
        }
    ]

    const onClick = () => {

    }

    return (
        <header
            data-testid='header'
            className={styles.container}>
            <ThemeSwitcher />
            <Dropdown options={options} onClick={onClick} className={styles.avatarContainer}>
                <Avatar size={50} image={userAuthData?.avatar} />
            </Dropdown>
        </header>
    )
}
