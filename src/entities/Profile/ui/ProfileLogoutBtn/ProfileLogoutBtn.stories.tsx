import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { storeDecorator } from '../../../../shared/config/storybook/decorators/storeDecorator'
import { mockStore } from '../../../../shared/constants/mockStore'
import { ProfileLogoutBtn } from './ProfileLogoutBtn'

const meta = {
    title: 'entities/Profile/ProfileLogoutBtn',
    component: ProfileLogoutBtn,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof ProfileLogoutBtn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}

Default.decorators = (storeDecorator(mockStore))
