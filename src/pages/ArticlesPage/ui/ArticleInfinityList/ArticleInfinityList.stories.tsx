import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { ArticleInfinityList } from './ArticleInfinityList'

const meta = {
    title: 'example_test/ArticleInfinityList',
    component: ArticleInfinityList,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof ArticleInfinityList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}
