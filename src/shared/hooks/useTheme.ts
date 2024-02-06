import { useContext } from 'react';
import { ThemeContext } from '../lib/context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '../constants/localStorage';
import { Theme } from '../enums';

interface IUseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): IUseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;

        switch (theme) {
            case Theme.Dark:
                newTheme = Theme.Light;
                break;
            case Theme.Light:
                newTheme = Theme.Red;
                break;
            case Theme.Red:
                newTheme = Theme.Dark;
                break;
            default:
                newTheme = Theme.Dark;
        }

        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setTheme(newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};
