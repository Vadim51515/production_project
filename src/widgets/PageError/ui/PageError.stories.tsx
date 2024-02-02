import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { themeDecorator } from '../../../shared/config/storybook/decorators/themeDecorator'
import { Theme } from '../../../shared/enums'
import { PageError } from './PageError'

export default { component: PageError }
const meta = {
    title: 'widget/PageError',
    component: PageError,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof PageError>

type Story = StoryObj<typeof meta>

export const Dark: Story = {
    args: {}
}

export const Light: Story = {
    args: {}
}

Light.decorators = [themeDecorator(Theme.Light)]
