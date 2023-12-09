import React, {
    Suspense
} from 'react'
import { Header } from 'widgets/Header/ui/Header'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Sidebar } from 'widgets/Sidebar'

export const App = () => {
    return (
        <div className={classNames('app', { hovered: true })}>
            <Suspense>
                <Header />
                <div className='contentPage'>
                    <Sidebar />
                    <div className='pageWrapper'>
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    )
}
