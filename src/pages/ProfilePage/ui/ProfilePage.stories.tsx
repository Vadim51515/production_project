import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { Theme } from '../../../app/providers/ThemeProvider'
import { storeDecorator } from '../../../shared/config/storybook/decorators/storeDecorator'
import { themeDecorator } from '../../../shared/config/storybook/decorators/themeDecorator'
import ProfilePage from './ProfilePage'

export default { component: ProfilePage }
const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {}

} satisfies Meta<typeof ProfilePage>

type Story = StoryObj<typeof meta>

const state = {
    counter: { value: 0 }
}
export const Dark: Story = {
    args: {}
}
Dark.decorators = (storeDecorator(state))

export const Light: Story = {
    args: {}
}
Light.decorators = (storeDecorator(state), themeDecorator(Theme.Light))

// Light.decorators = [themeDecorator(Theme.Light)]