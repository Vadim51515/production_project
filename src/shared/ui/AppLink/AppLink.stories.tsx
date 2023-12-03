import type {
    Meta,
    StoryObj
} from '@storybook/react'
import { Theme } from '../../../app/providers/ThemeProvider'
import { themeDecorator } from '../../config/storybook/decorators/themeDecorator'
import { AppLink } from './AppLink'

export default { component: AppLink }
const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/',
        children: 'Тестовый текст ссылки'
    }

} satisfies Meta<typeof AppLink>
// const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />
// export const Primary = Template.bind({})
// Primary.args = {
//     children: 'Text',
//     theme: AppLinkTheme.PRIMARY
// }
//
// export const Secondary = Template.bind({})
// Secondary.args = {
//     children: 'Text',
//     theme: AppLinkTheme.SECONDARY
// }
//
// export const PrimaryDark = Template.bind({})
// PrimaryDark.args = {
//     children: 'Text',
//     theme: AppLinkTheme.PRIMARY
// }
// PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
//
// export const SecondaryDark = Template.bind({})
// SecondaryDark.args = {
//     children: 'Text',
//     theme: AppLinkTheme.SECONDARY
// }
// SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        pattern: 'primary',
        children: 'Текст ссылки'
    }
}

export const PrimaryLight: Story = {
    args: {
        pattern: 'primary',
        children: 'Текст ссылки'
    }
}
PrimaryLight.decorators = [themeDecorator(Theme.Light)]

export const Button: Story = {
    args: {
        pattern: 'button',
        children: 'Текст ссылки'
    }
}

export const ButtonLight: Story = {
    args: {
        pattern: 'button',
        children: 'Текст ссылки'
    }
}

ButtonLight.decorators = [themeDecorator(Theme.Light)]
