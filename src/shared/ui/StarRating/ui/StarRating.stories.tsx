import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { StarRating } from './StarRating'

const meta = {
    title: 'example_test/StarRating',
    component: StarRating,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof StarRating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}
