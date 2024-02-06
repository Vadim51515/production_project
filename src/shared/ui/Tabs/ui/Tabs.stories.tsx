import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta = {
    title: 'shared/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tabs: [
            {
                value: 'tab 1',
                label: 'tab 1',
            },
            {
                value: 'tab 2',
                label: 'tab 2',
            },
            {
                value: 'tab 3',
                label: 'tab 3',
            },
        ],
        value: 'tab 2',
        onTabClick: action('onTabClick'),
    },
};
