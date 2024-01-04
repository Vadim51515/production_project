import React, { type ReactElement } from 'react'
import { RoutePath } from '../../../shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/MainIcon.svg'
import AboutIcon from 'shared/assets/icons/AboutIcon.svg'
import ArticleIcon from 'shared/assets/icons/Article.svg'
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
    }
]
