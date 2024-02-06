import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from '../../../shared/config/storybook/decorators/storeDecorator';
import { themeDecorator } from '../../../shared/config/storybook/decorators/themeDecorator';
import { mockStore } from '../../../shared/constants/mockStore';
import { Theme } from '../../../shared/enums';
import { Header } from './Header';

const meta = {
    title: 'widgets/Header',
    component: Header,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {},
};

export const Light: Story = {
    args: {},
};

Dark.decorators = storeDecorator(mockStore);

Light.decorators = [themeDecorator(Theme.Light), storeDecorator(mockStore)];
