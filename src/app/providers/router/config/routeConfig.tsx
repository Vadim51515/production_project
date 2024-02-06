import React from 'react';
import { UserRole } from '../../../../entities/User';
import { AboutPage } from '../../../../pages/AboutPage';
import { AdminPanelPage } from '../../../../pages/AdminPanelPage';
import { ArticleDetailsPage } from '../../../../pages/ArticleDetailsPage';
import { ArticleEditPage } from '../../../../pages/ArticleEditPage';
import { ArticlesPage } from '../../../../pages/ArticlesPage';
import { ForbiddenPage } from '../../../../pages/ForbiddenPage';
import { MainPage } from '../../../../pages/MainPage';
import { NotFoundPage } from '../../../../pages/NotFoundPage';
import { ProfilePage } from '../../../../pages/ProfilePage';
import {
    AppRoutes,
    getRouteForbidden,
    getRouteMain,
    getRouteAdmin,
    getRouteAbout,
    getRouteArticles,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteArticleCreate,
    getRouteProfile,
} from '../../../../shared/constants/common';
import { type TAppRoutesProps } from '../../../../shared/types';

export const routeConfig: Record<AppRoutes, TAppRoutesProps> = {
    [AppRoutes.Main]: {
        path: getRouteMain(),
        element: <MainPage />,
    },

    [AppRoutes.About]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },

    [AppRoutes.Profile]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        isAuthOnly: true,
    },

    [AppRoutes.Articles]: {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        isAuthOnly: true,
    },

    [AppRoutes.ArticleDetails]: {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailsPage />,
        isAuthOnly: true,
    },

    [AppRoutes.ArticleEdit]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        isAuthOnly: true,
    },

    [AppRoutes.ArticleCreate]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        isAuthOnly: true,
    },

    [AppRoutes.AdminPanel]: {
        path: getRouteAdmin(),
        element: <AdminPanelPage />,
        isAuthOnly: true,
        roles: [UserRole.Admin, UserRole.Manager],
    },

    [AppRoutes.Forbidden]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },

    [AppRoutes.NotFound]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
