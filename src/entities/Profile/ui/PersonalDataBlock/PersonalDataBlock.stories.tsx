import {
    type Meta,
    type StoryObj
} from '@storybook/react'
import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema'
import { storeDecorator } from '../../../../shared/config/storybook/decorators/storeDecorator'
import {
    Contry,
    Currency,
    RuntimeStatuses
} from '../../../../shared/const/common'

import { PersonalDataBlock } from './PersonalDataBlock'

export default { component: PersonalDataBlock }
const meta = {
    title: 'entities/PersonalDataBlock',
    component: PersonalDataBlock,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {}

} satisfies Meta<typeof PersonalDataBlock>

type Story = StoryObj<typeof meta>

const state: Partial<IStateSchema> = {
    profile: {
        isReadonly: false,
        status: RuntimeStatuses.Loading,
        data: {
            firstName: 'Вадим',
            surname: 'Пушкин',
            age: 22,
            city: 'Екатеринбург',
            avatar: 'https://illustrators.ru/uploads/illustration/image/1509699/kas.jpg',
            country: Contry.Russia,
            currency: Currency.RUB,
            id: 1
        },
        form: {
            firstName: 'Вадим',
            surname: 'Пушкин',
            age: 22,
            city: 'Екатеринбург',
            avatar: 'https://illustrators.ru/uploads/illustration/image/1509699/kas.jpg',
            country: Contry.Russia,
            currency: Currency.RUB,
            id: 1
        }
    }
}

export const Default: Story = {
    args: {}
}
Default.decorators = [storeDecorator(state)]
