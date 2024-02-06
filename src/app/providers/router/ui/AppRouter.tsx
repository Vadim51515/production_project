import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { type TAppRoutesProps } from '../../../../shared/types';
import { routeConfig } from '../config/routeConfig';
import { PageLoader } from '../../../../widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
    const renderWithWrapper = useCallback(({ path, element, isAuthOnly, roles }: TAppRoutesProps) => {
        return (
            <Route
                key={path}
                path={path}
                element={isAuthOnly ? <RequireAuth roles={roles}>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
};
