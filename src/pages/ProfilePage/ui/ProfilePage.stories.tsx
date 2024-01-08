import type {
    Meta,
    StoryObj
} from '@storybook/react'
import type { IStateSchema } from '../../../app/providers/StoreProvider/config/stateSchema'
import { Theme } from '../../../app/providers/ThemeProvider'
import { storeDecorator } from '../../../shared/config/storybook/decorators/storeDecorator'
import { themeDecorator } from '../../../shared/config/storybook/decorators/themeDecorator'
import {
    Contry,
    Currency,
    RuntimeStatuses
} from '../../../shared/const/common'
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

const state: Partial<IStateSchema> = {
    profile: {
        isReadonly: true,
        status: RuntimeStatuses.Loading,
        data: {
            firstName: 'Вадим',
            surname: 'Пушкин',
            age: 22,
            city: 'Екатеринбург',
            avatar: 'https://illustrators.ru/uploads/illustration/image/1509699/kas.jpg',
            country: Contry.Russia,
            currency: Currency.RUB,
            id: '1'
        },
        form: {
            firstName: 'Вадим',
            surname: 'Пушкин',
            age: 22,
            city: 'Екатеринбург',
            avatar: 'https://illustrators.ru/uploads/illustration/image/1509699/kas.jpg',
            country: Contry.Russia,
            currency: Currency.RUB,
            id: '1'
        }
    }
}
export const Dark: Story = {
    args: {}
}
Dark.decorators = (storeDecorator(state))

export const Light: Story = {
    args: {}
}
Light.decorators = [storeDecorator(state), themeDecorator(Theme.Light)]
