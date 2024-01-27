import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { NotificationList } from './NotificationList'

const meta = {
    title: 'example_test/NotificationList',
    component: NotificationList,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof NotificationList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}
