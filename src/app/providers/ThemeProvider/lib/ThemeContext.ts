import {
    createContext,
} from 'react';
import { Theme } from '../../../../enum';

export interface TThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<TThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'