import React, {
    type FC,
    useMemo
} from 'react'
import { useSelector } from 'react-redux'
import type { TOptions } from '../../../../app/types'
import { articlesPageActions } from '../../../../pages/ArticlesPage'
import { articlesPageTypeSelector } from '../../../../pages/ArticlesPage/model/selectors/articlesPage'
import { fetchArticleList } from '../../../../pages/ArticlesPage/model/services/fetchArticleList'
import { useActions } from '../../../../shared/hooks/useActions'
import { Tabs } from '../../../../shared/ui/Tabs/ui/Tabs'
import {
    ArticleType
} from '../../model/types'

interface IArticleCodeBlockProps {}

export const ArticleCodeBlock: FC<IArticleCodeBlockProps> = () => {
    const type = useSelector(articlesPageTypeSelector)

    const {
        setPage,
        setType
    } = useActions(articlesPageActions)

    const typeTubs = useMemo(() => Object.keys(ArticleType).map((label) => ({
        label,
        value: ArticleType[label as keyof typeof ArticleType]
    })), [])

    const fetchData = () => {
        fetchArticleList({ hasReplace: true })
    }
    const onChangeType = (newType: ArticleType) => {
        setType(newType)
        setPage(1)
        fetchData()
    }
    return (
        <Tabs tabs={typeTubs as TOptions<ArticleType>} value={type} onTabClick={onChangeType} />
    )
}
