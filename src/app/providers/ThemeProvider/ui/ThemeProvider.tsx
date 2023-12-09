import React, {
    useEffect,
    useMemo,
    useState
} from 'react'
import { type CFC } from '../../../types'
import { Theme } from '../lib/enum'
import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext
} from '../lib/ThemeContext'

const defaultItem = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.Dark

interface IThemeProvider {
    initialTheme?: Theme
}
const ThemeProvider: CFC<IThemeProvider> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultItem)

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme
        }),
        [
            theme
        ]
    )

    useEffect(() => {
        document.body.className = theme
    }, [])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
