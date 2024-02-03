import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { ArticleSortSelector } from './ArticleSortSelector'

const meta = {
    title: 'features/ArticleSortSelector',
    component: ArticleSortSelector,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof ArticleSortSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        order: 'asc',
        sort: 'createdAt'
    }
}
