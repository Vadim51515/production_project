import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from '../../../../shared/config/storybook/decorators/storeDecorator';
import { Contry, Currency, RuntimeStatuses } from '../../../../shared/constants/common';
import { ProfileHeader } from './ProfileHeader';

const meta = {
    title: 'entities/Profile/ProfileHeader',
    component: ProfileHeader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ProfileHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

Default.decorators = [
    storeDecorator({
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
                id: '1',
            },
            form: {
                firstName: 'Вадим',
                surname: 'Пушкин',
                age: 22,
                city: 'Екатеринбург',
                avatar: 'https://illustrators.ru/uploads/illustration/image/1509699/kas.jpg',
                country: Contry.Russia,
                currency: Currency.RUB,
                id: '1',
            },
        },
    }),
];
