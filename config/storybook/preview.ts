import type { Preview } from '@storybook/react'
import { Theme } from '../../src/app/providers/ThemeProvider'
import { routerDecorator } from '../../src/shared/config/storybook/decorators/routerDecorator'
import { styleDecorator } from '../../src/shared/config/storybook/decorators/styleDecorator'
import { themeDecorator } from '../../src/shared/config/storybook/decorators/themeDecorator'

const preview: Preview = {
    decorators: [
        // TODO Разобраться со стилями
        (Story) => styleDecorator(Story),
        (Story) => themeDecorator(Theme.Dark)(Story),
        (Story) => routerDecorator(Story)

    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
}

export default preview
