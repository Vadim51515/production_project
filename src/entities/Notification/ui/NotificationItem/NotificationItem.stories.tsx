import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { NotificationItem } from './NotificationItem'

const meta = {
    title: 'example_test/NotificationItem',
    component: NotificationItem,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof NotificationItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}
