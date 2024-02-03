import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { classNames } from '@/shared/lib/classNames/classNames'
import { articleDataSelector } from '../../../../entities/Article'

import {
    getRouteArticleEdit,
    getRouteArticles
} from '../../../../shared/constants/common'
import { Button } from '../../../../shared/ui/Button'
import { getCanEditArticleSelector } from '../../model/selectors/article'
import styles from './ArticleDetailsPageHeader.module.scss'

interface IArticleDetailsPageHeaderProps {
    className?: string
}

export const ArticleDetailsPageHeader: FC<IArticleDetailsPageHeaderProps> = ({ className }) => {
    const canEdit = useSelector(getCanEditArticleSelector)
    const article = useSelector(articleDataSelector)

    const navigate = useNavigate()

    const { t } = useTranslation()

    const onBackToList = () => {
        navigate(getRouteArticles())
    }

    const onEditArticle = () => {
        if (article?.id) navigate(getRouteArticleEdit(article?.id))
    }

    return (
        <div className={classNames(styles.articleDetailsPageHeader, {}, [className])}>
            <Button pattern='outline' onClick={onBackToList}>{t('Назад к списку')}</Button>
            {canEdit && <Button onClick={onEditArticle}>{t('Редактировать')}</Button>}

        </div>
    )
}
