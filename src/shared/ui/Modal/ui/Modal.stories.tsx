import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from '../../../config/storybook/decorators/themeDecorator';
import { Theme } from '../../../enums';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        children: 'Test modal text',
        isOpen: true,
        headerProps: {
            title: 'Test modal title',
        },
        footerProps: {
            onCancel: () => {},
            onConfirm: () => {},
        },
    },
};

export const Light: Story = {
    args: {
        children: 'Test modal text',
        isOpen: true,
        headerProps: {
            title: 'Test modal title',
        },
        footerProps: {
            onCancel: () => {},
            onConfirm: () => {},
        },
    },
};

Light.decorators = [themeDecorator(Theme.Light)];
