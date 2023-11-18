import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'
import {
    IHeaderProps,
} from './types';
export const Header: FC<IHeaderProps> = ({toggleTheme}) => {
    return (
        <div className={styles.container}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <button onClick={() => toggleTheme()}>Сменить тему</button>
        </div>
    );
};

