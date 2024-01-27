import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { storeDecorator } from '../../../../shared/config/storybook/decorators/storeDecorator'
import { mockStore } from '../../../../shared/const/mockStore'
import ArticleEditPage from './ArticleEditPage'

const meta = {
    title: 'page/ArticleEditPage',
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
Default.decorators = (storeDecorator(mockStore))
