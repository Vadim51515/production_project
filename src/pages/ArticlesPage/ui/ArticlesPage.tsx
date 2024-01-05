import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from '../../../shared/ui/Text'
import styles from './ArticlesPage.module.scss'

interface IArticlesPageProps {
    className?: string
}

const ArticlesPage: FC<IArticlesPageProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(styles.ArticlesPage, {}, [className])}>
            <Text>{t('ArticlesPage')}</Text>
        </div>
    )
}
export default ArticlesPage
