import type { Meta, StoryObj } from '@storybook/react';
import { AppImage } from './AppImage';

const meta = {
    title: 'example_test/AppImage',
    component: AppImage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AppImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
