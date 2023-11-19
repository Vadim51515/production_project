import React, { FC } from 'react';
import { Navbar } from '../../Navbar';
import styles from './Header.module.scss'
import {
    IHeaderProps,
} from './types';
export const Header: FC<IHeaderProps> = ({toggleTheme}) => {
    return (
        <div className={styles.container}>
            <Navbar />
            <button onClick={() => toggleTheme()}>Сменить тему</button>
        </div>
    );
};