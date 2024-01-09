import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { Page } from './Page'

const meta = {
    title: 'example_test/Page',
    component: Page,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}
