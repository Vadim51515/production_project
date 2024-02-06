import '@/app/styles/index.scss';
import { type Story } from '@storybook/react';
import { type Theme, ThemeProvider } from '../../../../app/providers/ThemeProvider';
import React from 'react';
export const themeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
