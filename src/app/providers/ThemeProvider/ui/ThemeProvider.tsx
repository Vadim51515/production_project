import React, {
    useMemo,
    useState
} from 'react'
import { type CFC } from 'app/types'
import { Theme } from '../lib/enum'
import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext
} from '../lib/ThemeContext'

const defaultItem = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme ?? Theme.Dark
const ThemeProvider: CFC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultItem)

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme
        }),
        [
            theme
        ]
    )

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
