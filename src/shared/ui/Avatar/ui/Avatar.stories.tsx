import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { Avatar } from './Avatar'

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/' +
            '1200px-Unofficial_JavaScript_logo_2.svg.png'
    }
}
