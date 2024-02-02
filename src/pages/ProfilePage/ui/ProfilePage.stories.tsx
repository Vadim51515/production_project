import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { storeDecorator } from '../../../shared/config/storybook/decorators/storeDecorator'
import { themeDecorator } from '../../../shared/config/storybook/decorators/themeDecorator'

import { mockStore } from '../../../shared/constants/mockStore'
import { Theme } from '../../../shared/enums'
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

export const Dark: Story = {
    args: {}
}
Dark.decorators = (storeDecorator(mockStore))

export const Light: Story = {
    args: {}
}
Light.decorators = [storeDecorator(mockStore), themeDecorator(Theme.Light)]
