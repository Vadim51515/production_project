import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { CommentList } from './CommentList'

const meta = {
    title: 'example_test/CommentList',
    component: CommentList,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof CommentList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}
