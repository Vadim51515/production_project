import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { MainPage } from '../index'

export default { component: MainPage }
const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {}

} satisfies Meta<typeof MainPage>

type Story = StoryObj<typeof meta>

export const Dark: Story = {
    args: {}
}

export const Light: Story = {
    args: {}
}

// Light.decorators = [themeDecorator(Theme.Light)]
