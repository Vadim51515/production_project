import type {
    Meta,
    StoryObj
} from '@storybook/react'
import ArticleRating from './ArticleRating'

const meta = {
    title: 'example_test/ArticleRating',
    component: ArticleRating,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof ArticleRating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}
