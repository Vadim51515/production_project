import React, {
    Suspense,
    useMemo
} from 'react'
import { useSelector } from 'react-redux'
import {
    Route,
    Routes
} from 'react-router-dom'
import { userAuthDataSelector } from '../../../../entities/User/model/selectors/selectors'
import { routeConfig } from '../../../../shared/config/routeConfig/routeConfig'
import { PageLoader } from '../../../../widgets/PageLoader'

export const AppRouter = () => {
    const isAuth = useSelector(userAuthDataSelector)

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            if (route.isAuthOnly && !isAuth) return false

            return true
        })
    }, [isAuth])

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routes.map(({
                    path,
                    element
                }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}
