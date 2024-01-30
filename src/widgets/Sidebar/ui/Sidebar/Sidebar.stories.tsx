import type {
    Meta,
    StoryObj
} from '@storybook/react'
import type { IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'
import { Theme } from '../../../../app/providers/ThemeProvider'
import { storeDecorator } from '../../../../shared/config/storybook/decorators/storeDecorator'
import { themeDecorator } from '../../../../shared/config/storybook/decorators/themeDecorator'
import { RuntimeStatuses } from '../../../../shared/const/common'
import { Sidebar } from './Sidebar'

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const state: DeepPartial<IStateSchema> = {
    login: {
        status: RuntimeStatuses.Ready,
        username: 'admin',
        password: '123'
    }
}

export const Dark: Story = {
    args: {}
}

Dark.decorators = [storeDecorator(state)]

export const Light: Story = {
    args: {}
}

Light.decorators = [
    themeDecorator(Theme.Light),
    storeDecorator(state)
]

export const isAuth: Story = {
    args: {}
}

isAuth.decorators = [
    themeDecorator(Theme.Light),
    storeDecorator({
        ...state,
        user: {
            authData: {
                username: 'test',
                id: '1'
            }
        }
    })
]
