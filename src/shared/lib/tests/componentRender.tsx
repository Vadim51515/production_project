import { render } from '@testing-library/react'
import React, { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { StoreProvider } from '../../../app/providers/StoreProvider'
import { type IStateSchema } from '../../../app/providers/StoreProvider/config/stateSchema'
import i18nForTests from '../../config/i18n/i18nForTests'

export interface IComponentRender {
    route?: string
    initialState?: DeepPartial<IStateSchema>
}

const initialOptions: IComponentRender = {
    route: '/',
    initialState: {}
}

export const componentRender = (component: ReactNode, options = initialOptions) => {
    const {
        route = '/',
        initialState
    } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}
