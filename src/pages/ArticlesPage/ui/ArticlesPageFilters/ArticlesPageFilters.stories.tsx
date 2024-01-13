import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { ArticlesPageFilters } from './ArticlesPageFilters'

const meta = {
    title: 'example_test/ArticlesPageFilters',
    component: ArticlesPageFilters,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof ArticlesPageFilters>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}
