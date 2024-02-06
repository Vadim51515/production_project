import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from '../../../shared/config/storybook/decorators/themeDecorator';
import { Theme } from '../../../shared/enums';
import { AboutPage } from '../index';

export default { component: AboutPage };
const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof AboutPage>;

type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {},
};

export const Light: Story = {
    args: {},
};

Light.decorators = [themeDecorator(Theme.Light)];
