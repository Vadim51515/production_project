import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

const meta = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        item: {
            id: '1',
            title: 'title',
            description: 'title',
            userId: '1',
        },
    },
};
