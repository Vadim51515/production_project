import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { themeDecorator } from '../../config/storybook/decorators/themeDecorator'
import { Theme } from '../../enums'
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
    }

} satisfies Meta<typeof AppLink>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        to: '/',
        pattern: 'primary',
        children: 'Текст ссылки'
    }
}
Primary.decorators = [themeDecorator(Theme.Dark)]

export const PrimaryLight: Story = {
    args: {
        to: '/',
        pattern: 'primary',
        children: 'Текст ссылки'
    }
}
PrimaryLight.decorators = [themeDecorator(Theme.Light)]

export const Button: Story = {
    args: {
        to: '/',
        pattern: 'button',
        children: 'Текст ссылки'
    }
}

Button.decorators = [themeDecorator(Theme.Dark)]

export const ButtonLight: Story = {
    args: {
        to: '/',
        pattern: 'button',
        children: 'Текст ссылки'
    }
}

ButtonLight.decorators = [themeDecorator(Theme.Light)]
