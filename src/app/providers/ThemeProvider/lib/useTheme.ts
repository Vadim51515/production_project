import { useContext } from 'react'
import { Theme } from './enum'
import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext
} from './ThemeContext'

interface IUseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export const useTheme = (): IUseThemeResult => {
    const {
        theme,
        setTheme
    } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.Dark
            ? Theme.Light
            : Theme.Dark
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
        document.body.className = newTheme
        setTheme(newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}
