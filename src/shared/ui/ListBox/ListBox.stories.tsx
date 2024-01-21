import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { ListBox } from './ListBox'

const meta = {
    title: 'example_test/ListBox',
    component: ListBox,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof ListBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        items: [
            {
                value: 1,
                label: 'Durward Reynolds'
            },
            {
                value: 2,
                label: 'Kenton Towne'
            },
            {
                value: 3,
                label: 'Therese Wunsch'
            },
            {
                value: 4,
                label: 'Benedict Kessler'
            },
            {
                value: 5,
                label: 'Katelyn Rohan'
            }
        ]
    }
}
