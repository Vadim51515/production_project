import React, { type FC, memo } from 'react';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg?react';
import LightIcon from '@/shared/assets/icons/theme-light.svg?react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { Button } from '@/shared/ui/Button';
import { userActionsObj } from '../../../entities/User/model/actions';
import { useActions } from '../../../shared/hooks/useActions';

interface IThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = memo(() => {
    const { toggleTheme, theme } = useTheme();
    const { saveJsonSettings } = useActions(userActionsObj);
    return (
        <Button
            pattern="clear"
            onClick={() => {
                toggleTheme((newTheme) => {
                    saveJsonSettings({ theme: newTheme });
                });
            }}
        >
            {theme === Theme.Dark ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
