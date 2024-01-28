import { AboutPage } from '@/pages/AboutPage'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage'
import React from 'react'
import { type RouteProps } from 'react-router-dom'
import { UserRole } from '../../../entities/User'
import { AdminPanelPage } from '../../../pages/AdminPanelPage'
import { ArticleDetailsPage } from '../../../pages/ArticleDetailsPage'
import { ArticleEditPage } from '../../../pages/ArticleEditPage'
import { ArticlesPage } from '../../../pages/ArticlesPage'
import { ForbiddenPage } from '../../../pages/ForbiddenPage'

export type TAppRoutesProps = RouteProps & {
    isAuthOnly?: boolean
    roles?: UserRole[]
}

export enum AppRoutes {
    Main = 'main',
    About = 'about',
    NotFound = 'not_found',
    Profile = 'profile',
   Articles = 'articles',
   ArticleDetails = 'article_details',
   ArticleCreate = 'article_create',
   ArticleEdit = 'article_edit',
   AdminPanel = 'admin_panel',
   Forbidden = 'forbidden'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '/',
    [AppRoutes.About]: '/about',
    [AppRoutes.Profile]: '/profile/', // + id
    [AppRoutes.Articles]: '/articles',
    [AppRoutes.ArticleDetails]: '/articles/', // + id
    [AppRoutes.ArticleCreate]: '/articles/new', // + id
    [AppRoutes.ArticleEdit]: '/articles/:id/edit', // + id
    [AppRoutes.AdminPanel]: '/admin', // + id
    [AppRoutes.Forbidden]: '/forbidden', // + id

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

    [AppRoutes.ArticleEdit]: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleEditPage />,
        isAuthOnly: true
    },

    [AppRoutes.ArticleCreate]: {
        path: `${RoutePath.article_create}`,
        element: <ArticleEditPage />,
        isAuthOnly: true
    },

    [AppRoutes.AdminPanel]: {
        path: `${RoutePath.admin_panel}`,
        element: <AdminPanelPage />,
        isAuthOnly: true,
        roles: [UserRole.Admin, UserRole.Manager]
    },

    [AppRoutes.Forbidden]: {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPage />
    },

    [AppRoutes.NotFound]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }

}
