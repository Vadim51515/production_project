import { Theme } from '@/shared/enums';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import { routerDecorator } from '../../src/shared/config/storybook/decorators/routerDecorator';
import { styleDecorator } from '../../src/shared/config/storybook/decorators/styleDecorator';

const preview: Preview = {
    decorators: [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        (Story) => styleDecorator(Story),
        (Story) => routerDecorator(Story),
        // (Story) => translationDecorator(Story)

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        withThemeByClassName({
            themes: {
                light: `app ${Theme.Light}`,
                dark: `app ${Theme.Dark}`,
                red: `app ${Theme.Red}`,
            },
            defaultTheme: 'light',
        }),
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'fullscreen',
    },
};

export default preview;
