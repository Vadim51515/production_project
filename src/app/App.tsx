import React from 'react';
import { Header } from 'widgets/Header/ui/Header';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {hovered:true}, [theme])}>
            <Header />
            <AppRouter />
        </div>
    );
};