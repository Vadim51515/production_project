import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'

const meta = {
    title: 'example_test/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof ArticleRecommendationsList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}
