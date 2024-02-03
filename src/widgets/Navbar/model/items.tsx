import React, { type ReactElement } from 'react'
import MainIcon from '@/shared/assets/icons/MainIcon.svg?react'
import AboutIcon from '@/shared/assets/icons/AboutIcon.svg?react'
import ArticleIcon from '@/shared/assets/icons/Article.svg?react'

import {
    getRouteAbout,
    getRouteArticleCreate,
    getRouteArticles,
    getRouteMain
} from '../../../shared/constants/common'
export interface INavbarItem {
    path: string
    text: string
    icon: ReactElement
}

export const navbarItemsList: INavbarItem[] = [
    {
        path: getRouteMain(),
        icon: <MainIcon />,
        text: 'Главная'
    },
    {
        path: getRouteAbout(),
        icon: <AboutIcon />,
        text: 'О сайте'
    },
    {
        path: getRouteArticles(),
        icon: <ArticleIcon />,
        text: 'Статьи'
    },
    {
        path: getRouteArticleCreate(),
        icon: <ArticleIcon />,
        text: 'Создать статью'
    }
]
