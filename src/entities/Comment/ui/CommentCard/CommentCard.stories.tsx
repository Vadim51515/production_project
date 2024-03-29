import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

const meta = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        comment: {
            id: '1',
            text: 'test text',
            user: {
                id: '1',
                avatar: '',
                username: 'inhellim-Test',
            },
        },
    },
};
