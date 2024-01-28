import '@/app/styles/index.scss'
import { type Story } from '@storybook/react'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import i18nForTests from '../../i18n/i18nForTests'
export const routerDecorator = (StoryComponent: Story) => {
    return (
        <BrowserRouter>
            <I18nextProvider i18n={i18nForTests}>
                <StoryComponent />
            </I18nextProvider>
        </BrowserRouter>
    )
}
