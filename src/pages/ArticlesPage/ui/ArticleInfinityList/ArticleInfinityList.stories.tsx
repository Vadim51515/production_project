import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { storeDecorator } from '../../../../shared/config/storybook/decorators/storeDecorator'
import { mockStore } from '../../../../shared/const/mockStore'
import { ArticleInfinityList } from './ArticleInfinityList'

const meta = {
    title: 'pages/ArticlesPage/ArticleInfinityList',
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

Default.decorators = (storeDecorator(mockStore))
