import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <AppLink to={'/'}>Главная</AppLink>
            <AppLink to={'/about'}>О сайте</AppLink>
        </div>
    );
};

