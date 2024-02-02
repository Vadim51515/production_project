import type { Meta, StoryObj } from '@storybook/react'
import { storeDecorator } from '../../../../shared/config/storybook/decorators/storeDecorator'
import { themeDecorator } from '../../../../shared/config/storybook/decorators/themeDecorator'
import { RuntimeStatuses } from '../../../../shared/constants/common'
import { Theme } from '../../../../shared/enums'
import LoginForm from './LoginForm'

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
    }

} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>
const state = {
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

export const WithError: Story = {
    args: {}
}
const stateWithError = { ...state, login: { ...state.login, error: 'Произошла ошибка' } }
WithError.decorators = [storeDecorator(stateWithError)]

Light.decorators = [themeDecorator(Theme.Light), storeDecorator(state)]
