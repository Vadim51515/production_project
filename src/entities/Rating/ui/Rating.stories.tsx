import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { Rating } from './Rating'

const meta = {
    title: 'example_test/Rating',
    component: Rating,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}
