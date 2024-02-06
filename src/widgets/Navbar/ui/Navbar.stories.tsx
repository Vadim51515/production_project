import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from '../../../shared/config/storybook/decorators/themeDecorator';
import { Theme } from '../../../shared/enums';
import { Navbar } from './Navbar';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {},
};

export const Light: Story = {
    args: {},
};

Light.decorators = [themeDecorator(Theme.Light)];
