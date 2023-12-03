import React, { type FC } from 'react'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import {
    Theme,
    useTheme
} from 'app/providers/ThemeProvider'
import { Button } from 'shared/ui/Button'

interface IThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = () => {
    const {
        toggleTheme,
        theme
    } = useTheme()

    return (
        <Button pattern='clear' onClick={() => { toggleTheme() }}>
            {theme === Theme.Dark ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}
