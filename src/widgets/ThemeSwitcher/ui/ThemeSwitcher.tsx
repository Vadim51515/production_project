import React, { type FC, memo } from 'react';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg?react';
import LightIcon from '@/shared/assets/icons/theme-light.svg?react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { Button } from '@/shared/ui/Button';

interface IThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = memo(() => {
    const { toggleTheme, theme } = useTheme();

    return (
        <Button
            pattern="clear"
            onClick={() => {
                toggleTheme();
            }}
        >
            {theme === Theme.Dark ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
