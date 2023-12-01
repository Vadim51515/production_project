import 'app/styles/index.scss'
import { type Story } from '@storybook/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
export const routerDecorator = (StoryComponent: Story) => {
    return (
        <BrowserRouter>
            <StoryComponent />
        </BrowserRouter>
    )
}
