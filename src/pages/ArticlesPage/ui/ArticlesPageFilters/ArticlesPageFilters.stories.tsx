import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from '../../../../shared/config/storybook/decorators/storeDecorator';
import { mockStore } from '../../../../shared/constants/mockStore';
import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta = {
    title: 'pages/ArticlesPage/ArticlesPageFilters',
    component: ArticlesPageFilters,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ArticlesPageFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

Default.decorators = storeDecorator(mockStore);
