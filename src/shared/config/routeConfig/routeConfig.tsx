import React from 'react'
import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'

export enum AppRoutes {
    Main = 'main',
    About = 'about',
    NotFound = 'not_found',
    Profile = 'profile'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '/',
    [AppRoutes.About]: '/about',
    [AppRoutes.Profile]: '/profile',

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

    [AppRoutes.Profile]: {
        path: RoutePath.not_found,
        element: <ProfilePage />
    },

    [AppRoutes.NotFound]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }

}
