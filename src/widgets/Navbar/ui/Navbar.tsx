import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from '../../../shared/ui/Button';
import styles from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {

    const { t } = useTranslation();
    return (
        <div className={classNames(styles.container, {}, [className])}>
            <AppLink to={'/'} pattern={'button'}>{t('Главная')}</AppLink>
            <AppLink to={'/about'} pattern={'button'}>{t('О сайте')}</AppLink>
        </div>
    );
};

