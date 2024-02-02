import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { storeDecorator } from '../../../shared/config/storybook/decorators/storeDecorator'
import { mockStore } from '../../../shared/constants/mockStore'
import { AvatarDropdown } from './AvatarDropdown'

const meta = {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof AvatarDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}

Default.decorators = (storeDecorator(mockStore))
