import type { Meta, StoryObj } from '@storybook/react';
import { Overlay } from './Overlay';

const meta = {
    title: 'shared/Overlay',
    component: Overlay,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
