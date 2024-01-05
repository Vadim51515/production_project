import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleDetails } from '../../../../entities/Article'
import { classNames } from '../../../../shared/lib/classNames/classNames'
import { Text } from '../../../../shared/ui/Text'

interface IArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({ className }) => {
    const { t } = useTranslation('article-details')

    const { id } = useParams<{ id: string }>()

    const renderContent = () => {
        if (!id && __PROJECT__ !== 'storybook') return <Text>{t('Статья не найдена')}</Text>
        return <>
            <ArticleDetails id={id ?? ''}/>
        </>
    }

    return (
        <div className={classNames('', {}, [className])}>
            {renderContent()}
        </div>
    )
}

export default ArticleDetailsPage
