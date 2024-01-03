import React, {
    Suspense,
    useEffect
} from 'react'
import { useSelector } from 'react-redux'
import { Header } from 'widgets/Header/ui/Header'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Sidebar } from 'widgets/Sidebar'
import {
    isInitSelector,
    userActions
} from '../entities/User'
import { useActions } from '../shared/hooks/useActions'

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
                    <div className='pageWrapper'>
                        {isInit && <AppRouter />}
                    </div>
                </div>
            </Suspense>
        </div>
    )
}
