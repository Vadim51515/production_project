import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import {
    getUserRolesSelector,
    type UserRole
} from '../../../../entities/User'
import { userAuthDataSelector } from '../../../../entities/User/model/selectors/selectors'
import { RoutePath } from '../../../../shared/config/routeConfig/routeConfig'
import { type CFC } from '../../../types'

interface IRequireAuth {
    roles?: UserRole[]
}
export const RequireAuth: CFC<IRequireAuth> = ({ children, roles }) => {
    const isAuth = useSelector(userAuthDataSelector)
    const location = useLocation()
    const userRoles = useSelector(getUserRolesSelector)

    const hasRequiredRoles = useMemo(() => {
        if (!roles) return true

        return roles.some((role) => {
            return userRoles?.includes(role)
        })
    }, [roles, userRoles])

    if (!isAuth) return <Navigate to={RoutePath.main} state={{ from: location }} replace />

    if (!hasRequiredRoles) return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />

    return children
}
