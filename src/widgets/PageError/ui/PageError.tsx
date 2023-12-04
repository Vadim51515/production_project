import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './PageError.module.scss'

interface IPageErrorProps {
    className?: string
}

export const PageError: FC<IPageErrorProps> = ({ className }) => {
    // const { t } = useTranslation()

    return (
        <div className={classNames(styles.pageError, {}, [className])}>
            {/* <p>{t('Произошла непредвиденная ошибка')}</p> */}
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <p>test test</p>
            {/* <Button onClick={() => { location.reload() }}>{t('Перезагрузить страницу')}</Button> */}
        </div>
    )
}
