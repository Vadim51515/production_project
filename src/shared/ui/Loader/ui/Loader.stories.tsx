import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { Theme } from '../../../../app/providers/ThemeProvider'
import { themeDecorator } from '../../../config/storybook/decorators/themeDecorator'
import { Loader } from './Loader'

const meta = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
    args: {}
}

export const Light: Story = {
    args: {}
}

Light.decorators = [themeDecorator(Theme.Light)]
