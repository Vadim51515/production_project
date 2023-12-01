import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
    }

} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Test text',
        pattern: 'primary'
    }
}

export const Clear: Story = {
    args: {
        children: 'Test text',
        pattern: 'clear'
    }
}

export const Outline: Story = {
    args: {
        children: 'Test text',
        pattern: 'outline'
    }
}
