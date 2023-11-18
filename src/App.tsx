import React, {
    Suspense,
} from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { classNames } from './helpers/classNames/classNames';
import { LazyAboutPage } from './pages/AboutPage/AboutPage.lazy';
import { LazyMainPage } from './pages/MainPage/MainPage.lazy';
import { useTheme } from './theme/useTheme';

export const App = () => {
    classNames(
        'remove-btn',
        {
            hovered: true,
            selectable: true,
            red: false,
        },
        ['pdg'],
    );
    const {
        theme,
        toggleTheme,
    } = useTheme();
    return (
        <div className={classNames('app', {hovered:true}, [theme])}>
            <Header toggleTheme={toggleTheme} />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route
                        path={'/about'}
                        element={<LazyAboutPage />}
                    />
                    <Route
                        path={'/'}
                        element={<LazyMainPage />}
                    />
                </Routes>
            </Suspense>
        </div>
    );
};