import type {
    Meta,
    StoryObj
} from '@storybook/react'
import {
    mockArticle
} from '../../../../entities/Article'

import { storeDecorator } from '../../../../shared/config/storybook/decorators/storeDecorator'
import { RuntimeStatuses } from '../../../../shared/constants/common'
import ArticleDetailsPage from './ArticleDetailsPage'

const meta = {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof ArticleDetailsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}

Default.decorators = [storeDecorator({
    articleDetails: {
        status: RuntimeStatuses.Ready,
        data: mockArticle
    }
})]
