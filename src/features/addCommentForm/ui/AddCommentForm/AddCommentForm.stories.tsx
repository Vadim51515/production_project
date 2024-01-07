import { action } from '@storybook/addon-actions'
import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { storeDecorator } from '../../../../shared/config/storybook/decorators/storeDecorator'
import AddCommentForm from './AddCommentForm'

const meta = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {}

} satisfies Meta<typeof AddCommentForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        sendComment: action('onSendComment')
    }
}

Default.decorators = [storeDecorator({})]
