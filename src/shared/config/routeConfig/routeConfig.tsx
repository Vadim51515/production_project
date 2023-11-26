import React from 'react'
import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'

export enum AppRoutes {
    Main = 'main',
    About = 'about',
    NotFound = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '/',
    [AppRoutes.About]: '/about',

    // Последний
    [AppRoutes.NotFound]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.Main]: {
        path: RoutePath.main,
        element: <MainPage />
    },

    [AppRoutes.About]: {
        path: RoutePath.about,
        element: <AboutPage />
    },

    [AppRoutes.NotFound]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }

}
