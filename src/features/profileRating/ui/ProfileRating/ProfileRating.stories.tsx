import type { Meta, StoryObj } from '@storybook/react';
import { storeDecorator } from '../../../../shared/config/storybook/decorators/storeDecorator';
import { mockStore } from '../../../../shared/constants/mockStore';
import ProfileRating from './ProfileRating';

const meta = {
    title: 'features/ProfileRating',
    component: ProfileRating,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ProfileRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: '2',
    },
};

Default.decorators = storeDecorator(mockStore);
