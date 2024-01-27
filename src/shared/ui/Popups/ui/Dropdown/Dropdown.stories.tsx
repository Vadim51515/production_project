import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { Text } from '../../../Text'
import { Dropdown } from './Dropdown'
import React from 'react'

const meta = {
    title: 'shared/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: <Text>{'Тестовая обертка'}</Text>,
        onClick: () => {},
        options: [
            {
                label: 'Item под номером 1',
                value: 'Item под номером 1'
            },
            {
                label: 'Item под номером 2',
                value: 'Item под номером 2'
            },
            {
                label: 'Item под номером 3 (Задизейбленный)',
                value: 'Item под номером 3',
                isDisabled: true
            }
        ]
    }
}
