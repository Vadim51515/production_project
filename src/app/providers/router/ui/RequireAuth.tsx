import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import { userAuthDataSelector } from '../../../../entities/User/model/selectors/selectors'
import { RoutePath } from '../../../../shared/config/routeConfig/routeConfig'
import { type CFC } from '../../../types'

export const RequireAuth: CFC = ({ children }) => {
    const isAuth = useSelector(userAuthDataSelector)
    const location = useLocation()

    if (!isAuth) return <Navigate to={RoutePath.main} state={{ from: location }} replace />

    return children
}
