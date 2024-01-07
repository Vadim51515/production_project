import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleList } from '../../../entities/Article'
import { Text } from '../../../shared/ui/Text'

interface IArticlesPageProps {
    className?: string
}

const ArticlesPage: FC<IArticlesPageProps> = () => {
    const { t } = useTranslation()

    return (
        <div>
            <Text>{t('ArticlesPage')}</Text>
            <ArticleList
                view={'list'}
                isLoading
                articles={[]}
            />
        </div>
    )
}
export default ArticlesPage
