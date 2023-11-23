import React, { Suspense } from 'react'
import { Header } from 'widgets/Header/ui/Header'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Sidebar } from 'widgets/Sidebar'

export const App = () => {
    const { theme } = useTheme()
    return (
        <div className={classNames('app', { hovered: true }, [theme])}>
            <Suspense>
                <Header />
                <div className='contentPage'>
                    <Sidebar />
                    <div className='pageWrapper'>
                        <AppRouter />
                    </div>
                    asdasd
                </div>
            </Suspense>
        </div>
    )
}
