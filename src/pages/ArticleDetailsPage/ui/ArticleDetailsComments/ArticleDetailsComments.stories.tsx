import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { storeDecorator } from '../../../../shared/config/storybook/decorators/storeDecorator'
import { mockStore } from '../../../../shared/const/mockStore'
import { ArticleDetailsComments } from './ArticleDetailsComments'

const meta = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
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
Default.decorators = (storeDecorator(mockStore))
