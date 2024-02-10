import { useContext } from 'react';
import { type Func } from '../../app/types';
import { LOCAL_STORAGE_THEME_KEY } from '../constants/localStorage';
import { ThemeContext } from '../lib/context/ThemeContext';
import { Theme } from '../enums';

interface IUseThemeResult {
    toggleTheme: (saveAction: Func<[Theme]>) => void;
    theme: Theme;
}

export const useTheme = (): IUseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction?: Func<[Theme]>) => {
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
        setTheme(newTheme);
        saveAction?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};
