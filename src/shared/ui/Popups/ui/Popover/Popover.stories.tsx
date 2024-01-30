import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { Popover } from './Popover'

const meta = {
    title: 'shared/Popups/Popover',
    component: Popover,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: null,
        trigger: null
    }
}
