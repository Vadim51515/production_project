import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { ProfileLogoutBtn } from './ProfileLogoutBtn'

const meta = {
    title: 'example_test/ProfileLogoutBtn',
    component: ProfileLogoutBtn,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof ProfileLogoutBtn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}
