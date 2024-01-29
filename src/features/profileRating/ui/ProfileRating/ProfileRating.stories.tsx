import type {
    Meta,
    StoryObj
} from '@storybook/react'
import ProfileRating from './ProfileRating'

const meta = {
    title: 'example_test/ProfileRating',
    component: ProfileRating,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof ProfileRating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        id: '1'
    }
}
