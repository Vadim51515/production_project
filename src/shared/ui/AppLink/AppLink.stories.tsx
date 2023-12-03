import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { Theme } from '../../../app/providers/ThemeProvider'
import { themeDecorator } from '../../config/storybook/decorators/themeDecorator'
import { AppLink } from './AppLink'
import React from 'react'
export default { component: AppLink }
const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/',
        children: 'Тестовый текст ссылки'
    }

} satisfies Meta<typeof AppLink>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    render: () => {
        return (
            <AppLink pattern={'primary'} to='/'>
                {'Текст ссылки'}
            </AppLink>)
    }
}

export const PrimaryLight: Story = {
    args: {
        pattern: 'primary',
        children: 'Текст ссылки'
    }
}
PrimaryLight.decorators = [themeDecorator(Theme.Light)]

export const Button: Story = {
    args: {
        pattern: 'button',
        children: 'Текст ссылки'
    }
}

export const ButtonLight: Story = {
    args: {
        pattern: 'button',
        children: 'Текст ссылки'
    }
}

ButtonLight.decorators = [themeDecorator(Theme.Light)]
