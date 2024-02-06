import { type ReducersMapObject } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import React, { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { StoreProvider } from '../../../app/providers/StoreProvider'
import { type IStateSchema } from '../../../app/providers/StoreProvider/config/stateSchema'
import { ThemeProvider } from '../../../app/providers/ThemeProvider'
import {
    type CFC,
    type DeepPartial
} from '../../../app/types'
import i18nForTests from '../../config/i18n/i18nForTests'
import { Theme } from '../../enums'
import '@/app/styles/index.scss'
export interface IComponentRender {
    route?: string
    initialState?: DeepPartial<IStateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
    theme?: Theme
}

const initialOptions: IComponentRender = {
    route: '/',
    initialState: {},
    asyncReducers: {}
}

export interface ITestProvider {
    options: IComponentRender
}

export const TestProvider: CFC<ITestProvider> = ({ options, children }) => {
    const {
        route = '/',
        initialState,
        asyncReducers,
        theme = Theme.Dark
    } = options

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    <ThemeProvider initialTheme={theme}>
                        <div className={`app ${theme}`}>
                            {children}
                        </div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}
export const componentRender = (component: ReactNode, options = initialOptions) => {
    return render(<TestProvider options={options}>{component}</TestProvider>)
}
