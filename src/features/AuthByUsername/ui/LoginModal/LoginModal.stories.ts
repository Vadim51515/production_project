import type { Meta, StoryObj } from '@storybook/react';
import type { IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema';
import { storeDecorator } from '../../../../shared/config/storybook/decorators/storeDecorator';
import { themeDecorator } from '../../../../shared/config/storybook/decorators/themeDecorator';
import { RuntimeStatuses } from '../../../../shared/constants/common';
import { Theme } from '../../../../shared/enums';
import { LoginModal } from './LoginModal';

const meta = {
    title: 'features/LoginModal',
    component: LoginModal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;
const state: DeepPartial<IStateSchema> = {
    login: {
        status: RuntimeStatuses.Ready,
        username: 'admin',
        password: '123',
    },
};
export const Dark: Story = {
    args: {},
};

Dark.decorators = [storeDecorator(state)];

export const Light: Story = {
    args: {},
};

Light.decorators = [themeDecorator(Theme.Light), storeDecorator(state)];
