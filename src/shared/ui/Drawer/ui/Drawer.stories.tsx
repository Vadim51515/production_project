import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { Drawer } from './Drawer'

const meta = {
    title: 'example_test/Drawer',
    component: Drawer,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        isOpen: true,
        children: null
    }
}
