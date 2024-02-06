import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from '../../../shared/config/storybook/decorators/themeDecorator';
import { Theme } from '../../../shared/enums';
import { ThemeSwitcher } from './ThemeSwitcher';

export default { component: ThemeSwitcher };
const meta = {
    title: 'shared/AppLink',
    component: ThemeSwitcher,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ThemeSwitcher>;

type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {},
};

export const Light: Story = {
    args: {},
};

Light.decorators = [themeDecorator(Theme.Light)];
