import React, { useEffect, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '../../../../shared/constants/localStorage';
import { Theme } from '../../../../shared/enums';
import { type CFC } from '../../../types';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';

const defaultItem = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.Dark;

interface IThemeProvider {
    initialTheme?: Theme;
}
const ThemeProvider: CFC<IThemeProvider> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultItem);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
