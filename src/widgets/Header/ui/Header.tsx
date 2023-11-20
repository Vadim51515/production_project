import React, { FC } from 'react';
import { Navbar } from '../../Navbar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Header.module.scss'
export const Header: FC = () => {
    return (
        <div className={styles.container}>
            <ThemeSwitcher />
        </div>
    );
};