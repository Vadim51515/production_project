import { createContext } from 'react'
import { Theme } from '../../enums'

export interface TThemeContextProps {
    theme: Theme
    setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<TThemeContextProps>({
    theme: Theme.Dark,
    setTheme: () => {}
})
