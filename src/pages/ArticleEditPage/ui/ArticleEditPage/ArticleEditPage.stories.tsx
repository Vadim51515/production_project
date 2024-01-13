import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { ArticleEditPage } from './ArticleEditPage'

const meta = {
    title: 'example_test/ArticleEditPage',
    component: ArticleEditPage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof ArticleEditPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}
