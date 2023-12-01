import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { Theme } from '../../../app/providers/ThemeProvider'
import { themeDecorator } from '../../../shared/config/storybook/decorators/themeDecorator'
import { AppLink } from './AppLink'

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
    args: {
        children: 'Текст ссылки'
    }
}

export const PrimaryLight: Story = {
    args: {
        children: 'Текст ссылки'
    }
}
PrimaryLight.decorators = [themeDecorator(Theme.Light)]

export const Button: Story = {
    args: {
        children: 'Текст ссылки'
    }
}

export const ButtonLight: Story = {
    args: {
        children: 'Текст ссылки'
    }
}

ButtonLight.decorators = [themeDecorator(Theme.Light)]
