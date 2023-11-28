import React, { type FC } from 'react'
import { ThemeSwitcher } from '../../ThemeSwitcher'
import styles from './Header.module.scss'

export const Header: FC = () => {
    return (
        <div
            data-testid='header'
            className={styles.container}>
            <ThemeSwitcher />
        </div>
    )
}
