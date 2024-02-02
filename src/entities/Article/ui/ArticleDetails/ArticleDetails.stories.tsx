import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { storeDecorator } from '../../../../shared/config/storybook/decorators/storeDecorator'
import { RuntimeStatuses } from '../../../../shared/constants/common'
import { mockArticle } from '../../model/constants'

import { ArticleDetails } from './ArticleDetails'

const meta = {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof ArticleDetails>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        id: '1'
    }
}

Default.decorators = [storeDecorator({
    articleDetails: {
        status: RuntimeStatuses.Ready,
        data: mockArticle
    }
})]

export const Loading: Story = {
    args: {
        id: '1'
    }
}

Loading.decorators = [storeDecorator({
    articleDetails: {
        status: RuntimeStatuses.Loading
    }
})]

export const Error: Story = {
    args: {
        id: '1'
    }
}

Error.decorators = [storeDecorator({
    articleDetails: {
        status: RuntimeStatuses.Error,
        error: 'Произошла непредвиденная ошибка'
    }
})]
