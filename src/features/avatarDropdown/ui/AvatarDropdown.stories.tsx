import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { AvatarDropdown } from './AvatarDropdown'

const meta = {
    title: 'example_test/AvatarDropdown',
    component: AvatarDropdown,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof AvatarDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}