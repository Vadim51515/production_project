import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '../../../../app/providers/ThemeProvider'
import { themeDecorator } from '../../../../shared/config/storybook/decorators/themeDecorator'
import { LoginModal } from './LoginModal'

const meta = {
    title: 'features/LoginModal',
    component: LoginModal,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
    }

} satisfies Meta<typeof LoginModal>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
    args: {}
}

export const Light: Story = {
    args: {}
}

Light.decorators = [themeDecorator(Theme.Light)]
