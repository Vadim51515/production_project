import {
    type FC,
    useMemo
} from 'react'
import { useSelector } from 'react-redux'
import { type TOptions } from '../../../app/types'
import { ArticleType } from '../../../entities/Article'
import { articlesPageActions } from '../../../pages/ArticlesPage'
import { articlesPageTypeSelector } from '../../../pages/ArticlesPage/model/selectors/articlesPage'
import { useActions } from '../../../shared/hooks/useActions'
import { Tabs } from '../../../shared/ui/Tabs/ui/Tabs'

interface IArticleTypeTabsProps {
    className?: string
}

export const ArticleTypeTabs: FC<IArticleTypeTabsProps> = () => {
    const type = useSelector(articlesPageTypeSelector)

    const {
        setPage,
        setType,
        fetchArticleList
    } = useActions(articlesPageActions)

    const typeTubs = useMemo(() => Object.keys(ArticleType).map((label) => ({
        label,
        value: ArticleType[label as keyof typeof ArticleType]
    })), [])

    const onChangeType = (newType: ArticleType) => {
        setType(newType)
        setPage(1)
        fetchData()
    }

    const fetchData = () => {
        fetchArticleList({ hasReplace: true })
    }

    return (
        <Tabs tabs={typeTubs as TOptions<ArticleType>} value={type} onTabClick={onChangeType} />
    )
}
