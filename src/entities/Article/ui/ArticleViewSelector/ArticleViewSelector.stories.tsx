import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { ArticleViewSelector } from './ArticleViewSelector'

const meta = {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof ArticleViewSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        onViewClick: () => {},
        view: 'list'
    }
}
