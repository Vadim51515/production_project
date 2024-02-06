import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from '../../../shared/config/storybook/decorators/storeDecorator';
import { mockStore } from '../../../shared/constants/mockStore';
import { Page } from './Page';

const meta = {
    title: 'widgets/Page',
    component: Page,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

Default.decorators = storeDecorator(mockStore);
