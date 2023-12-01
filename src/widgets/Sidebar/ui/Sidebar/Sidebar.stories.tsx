import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { Theme } from '../../../../app/providers/ThemeProvider'
import { themeDecorator } from '../../../../shared/config/storybook/decorators/themeDecorator'
import { Sidebar } from './Sidebar'

const meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
    args: {}
}

export const Light: Story = {
    args: {}
}

Light.decorators = [themeDecorator(Theme.Light)]
