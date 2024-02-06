import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from '../../../shared/config/storybook/decorators/storeDecorator';
import { MainPage } from '../index';

export default { component: MainPage };
const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof MainPage>;

type Story = StoryObj<typeof meta>;

const state = {
    counter: { value: 0 },
};
export const Dark: Story = {
    args: {},
};
Dark.decorators = storeDecorator(state);

export const Light: Story = {
    args: {},
};
Light.decorators = storeDecorator(state);

// Light.decorators = [themeDecorator(Theme.Light)]
