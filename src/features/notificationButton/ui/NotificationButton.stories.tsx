import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { NotificationButton } from './NotificationButton'

const meta = {
    title: 'features/NotificationButton',
    component: NotificationButton,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof NotificationButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}
