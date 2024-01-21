import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { ArticleDetailsComments } from './ArticleDetailsComments'

const meta = {
    title: 'example_test/ArticleDetailsComments',
    component: ArticleDetailsComments,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof ArticleDetailsComments>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        id: '1'
    }
}
