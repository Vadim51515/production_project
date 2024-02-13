import React, { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useLocation } from 'react-router-dom';
import { AppLink } from '../../../../shared/ui/AppLink/AppLink';
import { type INavbarItem } from '../../model/items';
import styles from './NavbarItem.module.scss';

interface INavbarItemProps {
    className?: string;
    item: INavbarItem;
    isCollapsedNavbar?: boolean;
}

export const NavbarItem: FC<INavbarItemProps> = memo(({ item, isCollapsedNavbar }) => {
    const { icon, path, text } = item;

    const { t } = useTranslation();
    const location = useLocation(); // Получение текущего пути

    const getActiveItem = () => {
        return '/' + location.pathname.split('/')[1] === path;
    };

    const modsContent = {
        animationHideText: isCollapsedNavbar,
        animationShowText: !isCollapsedNavbar,
    };

    return (
        <AppLink
            className={classNames(styles.appLink, { [styles.currentLink]: getActiveItem() })}
            classNameContent={classNames('', modsContent)}
            to={path}
            pattern={'button'}
            prefix={icon}
        >
            {t(text)}
        </AppLink>
    );
});
