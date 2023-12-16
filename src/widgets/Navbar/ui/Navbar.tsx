import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { RoutePath } from '../../../shared/config/routeConfig/routeConfig'
import { AppLink } from '../../../shared/ui/AppLink/AppLink'
import styles from './Navbar.module.scss'
import AboutIcon from 'shared/assets/icons/AboutIcon.svg'
import MainIcon from 'shared/assets/icons/MainIcon.svg'

interface INavbarProps {
    className?: string
    isCollapsedNavbar?: boolean
}

export const Navbar: FC<INavbarProps> = ({ className, isCollapsedNavbar }) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(styles.container, {}, [className])}>
            <AppLink
                className={styles.appLink}
                classNameContent={classNames('', { [styles.appLinkContent]: isCollapsedNavbar })}
                to={RoutePath.main}
                pattern={'button'}
                postfix={<AboutIcon />}
            >
                {t('Главная')}</AppLink>

            <AppLink
                className={styles.appLink}
                classNameContent={classNames('', { [styles.appLinkContent]: isCollapsedNavbar })}
                to={RoutePath.about}
                pattern={'button'}
                postfix={<MainIcon />}
            >{t('О сайте')}</AppLink>
        </div>
    )
}
