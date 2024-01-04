import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '../../../../shared/lib/classNames/classNames'
import { Text } from '../../../../shared/ui/Text'
import styles from './ArticleDetailsPage.module.scss'

interface IArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Text>ArticleDetailsPage</Text>

        </div>
    )
}

export default ArticleDetailsPage
