import React, {
    Suspense,
    useCallback
} from 'react'
import {
    Route,
    Routes
} from 'react-router-dom'
import {
    routeConfig,
    type TAppRoutesProps
} from '../../../../shared/config/routeConfig/routeConfig'
import { PageLoader } from '../../../../widgets/PageLoader'
import { RequireAuth } from './RequireAuth'

export const AppRouter = () => {
    const renderWithWrapper = useCallback(({
        path,
        element,
        isAuthOnly
    }: TAppRoutesProps) => {
        return (
            <Route
                key={path}
                path={path}
                element={isAuthOnly
                    ? <RequireAuth>{element}</RequireAuth>
                    : element}
            />
        )
    }, [])

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
    )
}
