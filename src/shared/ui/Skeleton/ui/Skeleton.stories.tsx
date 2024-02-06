import type { Meta, StoryObj } from '@storybook/react';
import { themeDecorator } from '../../../config/storybook/decorators/themeDecorator';
import { Theme } from '../../../enums';
import { Skeleton } from './Skeleton';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};

export const Circle: Story = {
    args: {
        borderRadius: '50%',
        width: 100,
        height: 100,
    },
};

export const DefaultLight: Story = {
    args: {
        width: '100%',
        height: 200,
    },
};

DefaultLight.decorators = [themeDecorator(Theme.Light)];

export const CircleLight: Story = {
    args: {
        borderRadius: '50%',
        width: 100,
        height: 100,
    },
};
CircleLight.decorators = [themeDecorator(Theme.Light)];
