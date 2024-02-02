import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { themeDecorator } from '../../../shared/config/storybook/decorators/themeDecorator'
import { Theme } from '../../../shared/enums'
import { NotFoundPage } from '../index'

export default { component: NotFoundPage }
const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {}

} satisfies Meta<typeof NotFoundPage>

type Story = StoryObj<typeof meta>

export const Dark: Story = {
    args: {}
}

export const Light: Story = {
    args: {}
}

Light.decorators = [themeDecorator(Theme.Light)]
