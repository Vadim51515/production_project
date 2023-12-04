import type { Preview } from '@storybook/react'
import { routerDecorator } from '../../src/shared/config/storybook/decorators/routerDecorator'
import { styleDecorator } from '../../src/shared/config/storybook/decorators/styleDecorator'

const preview: Preview = {
    decorators: [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        (Story) => styleDecorator(Story),
        // (Story) => themeDecorator(Theme.Light)(Story),
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
