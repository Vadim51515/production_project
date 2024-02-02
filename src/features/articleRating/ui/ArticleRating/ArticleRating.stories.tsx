import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { storeDecorator } from '../../../../shared/config/storybook/decorators/storeDecorator'
import { mockStore } from '../../../../shared/constants/mockStore'
import ArticleRating from './ArticleRating'

const meta = {
    title: 'features/ArticleRating',
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
    args: {
        articleId: '1'
    }
}
Default.decorators = (storeDecorator(mockStore))
