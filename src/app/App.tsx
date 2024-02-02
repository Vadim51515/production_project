import React, {
    Suspense,
    useEffect
} from 'react'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppRouter } from '@/app/providers/router'
import { Sidebar } from '@/widgets/Sidebar'
import {
    isInitSelector,
    userActions
} from '../entities/User'
import { useActions } from '../shared/hooks/useActions'
import { Header } from '../widgets/Header'

export const App = () => {
    const isInit = useSelector(isInitSelector)

    const { initAuthData } = useActions(userActions)

    useEffect(() => {
        initAuthData()
    }, [initAuthData])

    return (
        <div className={classNames('app', { hovered: true })}>
            <Suspense>
                <Header />
                <div className='contentPage'>
                    <Sidebar />
                    {isInit && <AppRouter />}
                </div>
            </Suspense>
        </div>
    )
}
