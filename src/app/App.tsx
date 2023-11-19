import React, {
    Suspense,
} from 'react';
import {
    Route,
    Routes,
} from 'react-router-dom';
import { Header } from 'app/ui/Header';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { classNames } from 'shared/lib/classNames/classNames';

export const App = () => {
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
                        element={<AboutPage />}
                    />
                    <Route
                        path={'/'}
                        element={<MainPage />}
                    />
                </Routes>
            </Suspense>
        </div>
    );
};