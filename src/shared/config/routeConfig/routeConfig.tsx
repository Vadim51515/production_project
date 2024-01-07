import React from 'react'
import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticleDetailsPage } from '../../../pages/ArticleDetailsPage'
import { ArticlesPage } from '../../../pages/ArticlesPage'

export type TAppRoutesProps = RouteProps & {
    isAuthOnly?: boolean
}

export enum AppRoutes {
    Main = 'main',
    About = 'about',
    NotFound = 'not_found',
    Profile = 'profile',
   Articles = 'articles',
   ArticleDetails = 'article_details'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '/',
    [AppRoutes.About]: '/about',
    [AppRoutes.Profile]: '/profile/', // + id
    [AppRoutes.Articles]: '/articles',
    [AppRoutes.ArticleDetails]: '/articles/', // + id

    // Последний
    [AppRoutes.NotFound]: '*'
}

export const routeConfig: Record<AppRoutes, TAppRoutesProps> = {
    [AppRoutes.Main]: {
        path: RoutePath.main,
        element: <MainPage />
    },

    [AppRoutes.About]: {
        path: RoutePath.about,
        element: <AboutPage />
    },

    [AppRoutes.Profile]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        isAuthOnly: true
    },

    [AppRoutes.Articles]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        isAuthOnly: true
    },

    [AppRoutes.ArticleDetails]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        isAuthOnly: true
    },

    [AppRoutes.NotFound]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }

}
