import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { Flex } from './Flex'
import React from 'react'

const meta = {
    title: 'shared/Stack/Flex',
    component: Flex,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof meta>

const children = (
    <>
        <div>{'first'}</div>
        <div>{'first'}</div>
        <div>{'first'}</div>
        <div>{'first'}</div>
    </>
)

export const Row: Story = {
    args: {
        children
    }
}

export const RowGap4: Story = {
    args: {
        gap: '4',
        children
    }
}

export const RowGap8: Story = {
    args: {
        gap: '8',
        children
    }
}

export const RowGap16: Story = {
    args: {
        gap: '16',
        children
    }
}

export const Column: Story = {
    args: {
        direction: 'column',
        children
    }
}

export const Column16: Story = {
    args: {
        direction: 'column',
        gap: '16',
        children
    }
}

export const ColumnAlignEnd: Story = {
    args: {
        direction: 'column',
        align: 'end',
        children
    }
}
