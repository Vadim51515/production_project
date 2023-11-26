import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NotFoundPage.module.scss'

interface INotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<INotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(styles.notFoundPage, {}, [className])}>
            <h1 className={styles.title}>{t('Страница не найдена')}</h1>
        </div>
    )
}
