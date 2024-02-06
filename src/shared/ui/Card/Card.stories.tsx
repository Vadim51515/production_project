import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text';
import { Card } from './Card';
import React from 'react';

const meta = {
    title: 'shared/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <Text>{'Тестовый текст в блоке'}</Text>,
    },
};
