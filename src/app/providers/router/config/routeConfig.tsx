import React from 'react'
import { UserRole } from '../../../../entities/User'
import { AboutPage } from '../../../../pages/AboutPage'
import { AdminPanelPage } from '../../../../pages/AdminPanelPage'
import { ArticleDetailsPage } from '../../../../pages/ArticleDetailsPage'
import { ArticleEditPage } from '../../../../pages/ArticleEditPage'
import { ArticlesPage } from '../../../../pages/ArticlesPage'
import { ForbiddenPage } from '../../../../pages/ForbiddenPage'
import { MainPage } from '../../../../pages/MainPage'
import { NotFoundPage } from '../../../../pages/NotFoundPage'
import { ProfilePage } from '../../../../pages/ProfilePage'
import {
    AppRoutes,
    RoutePath
} from '../../../../shared/constants/common'
import { type TAppRoutesProps } from '../../../../shared/types'

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
