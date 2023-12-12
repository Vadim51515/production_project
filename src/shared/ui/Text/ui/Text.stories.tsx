import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
    }

} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

// TODO Дописать для всех тегов Stories

export const P: Story = {
    args: {
        children: 'Test text'
    }
}
