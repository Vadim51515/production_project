import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import EyeIcon from '@/shared/assets/icons/Eye.svg?react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { RoutePath } from '../../../../shared/config/routeConfig/routeConfig'
import { AppLink } from '../../../../shared/ui/AppLink/AppLink'
import { Avatar } from '../../../../shared/ui/Avatar/ui/Avatar'
import { Button } from '../../../../shared/ui/Button'
import { Card } from '../../../../shared/ui/Card/Card'
import { Icon } from '../../../../shared/ui/Icon/Icon'
import { Text } from '../../../../shared/ui/Text'
import {
    ArticleBlockTypes,
    type IArticle,
    type IArticleTextBlock,
    type TArticleViewType
} from '../../model/types'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import styles from './ArticleListItem.module.scss'

interface IArticleListItemProps {
    className?: string
    article: IArticle
    view: TArticleViewType
    target?: React.HTMLAttributeAnchorTarget
}

export const ArticleListItem: FC<IArticleListItemProps> = ({
    className,
    article,
    view,
    target
}) => {
    const { t } = useTranslation()

    const navigate = useNavigate()

    const onOpenArticle = () => {
        navigate(RoutePath.article_details + article.id)
    }

    const views = (
        <div className={styles.viewsContainer}>
            <Text>{article.views}</Text>
            <Icon Svg={EyeIcon} />
        </div>
    )

    const renderContent = () => {
        if (view === 'list') {
            return (
                <AppLink target={target} to={RoutePath.article_details + article.id}>
                    <Card className={styles.listContainer} onClick={onOpenArticle}>
                        <div className={styles.imgContainer}>
                            <img
                                className={styles.img}
                                src={article.img}
                            />
                        </div>
                        <div className={styles.infoContainer}>
                            <div>
                                <Text
                                    tag={'h3'}
                                    withMarginBottom
                                > {article.title}</Text>
                                <Text withMarginBottom> {article.type.join(', ')}</Text>
                            </div>
                            <div className={styles.additionalInfoContainer}>
                                {views}

                                <Text className={styles.createdAt}>{article.createdAt}</Text>
                            </div>
                        </div>
                    </Card>
                </AppLink>
            )
        }

        const textBlock = article.blocks.find((block => block.type === ArticleBlockTypes.TEXT)) as IArticleTextBlock

        return (
            <Card className={styles.tileContainer}>
                <div className={styles.header}>
                    <div className={styles.headerUserData}>
                        <Avatar
                            image={article.user.avatar}
                            size={20}
                            className={styles.avatar}
                        />
                        <Text>{article.user.username}</Text>
                    </div>

                    <Text className={styles.createdAt}>{article.createdAt}</Text>
                </div>

                <Text
                    tag={'h2'}
                    withMarginBottom
                > {article.title}</Text>
                <Text withMarginBottom> {article.type.join(', ')}</Text>
                <img
                    className={styles.img}
                    src={article.img}
                />

                {textBlock && <ArticleTextBlock className={styles.textBlock} block={textBlock} />}

                <div className={styles.footer}>
                    <AppLink target={target} to={RoutePath.article_details + article.id}>
                        <Button onClick={onOpenArticle} pattern={'outline'}>{t('Читать далее') + '...'}</Button>
                    </AppLink>
                    {views}
                </div>

            </Card>
        )
    }

    return (
        <div className={classNames(styles.ArticleListItem, {}, [className])}>
            {renderContent()}
        </div>
    )
}
