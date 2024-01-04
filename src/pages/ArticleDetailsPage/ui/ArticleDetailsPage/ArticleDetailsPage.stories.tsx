import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { ArticleDetailsPage } from './ArticleDetailsPage'

const meta = {
    title: 'example_test/ArticleDetailsPage',
    component: ArticleDetailsPage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof ArticleDetailsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}
