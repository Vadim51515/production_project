import React, { type ReactElement } from 'react'
import MainIcon from '@/shared/assets/icons/MainIcon.svg?react'
import AboutIcon from '@/shared/assets/icons/AboutIcon.svg?react'
import ArticleIcon from '@/shared/assets/icons/Article.svg?react'
import { RoutePath } from '../../../shared/config/routeConfig/routeConfig'
export interface INavbarItem {
    path: string
    text: string
    icon: ReactElement
}

export const navbarItemsList: INavbarItem[] = [
    {
        path: RoutePath.main,
        icon: <MainIcon />,
        text: 'Главная'
    },
    {
        path: RoutePath.about,
        icon: <AboutIcon />,
        text: 'О сайте'
    },
    {
        path: RoutePath.articles,
        icon: <ArticleIcon />,
        text: 'Статьи'
    },
    {
        path: RoutePath.article_create,
        icon: <ArticleIcon />,
        text: 'Создать статью'
    }
]
