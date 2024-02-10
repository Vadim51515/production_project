import { type Theme } from '../../../shared/enums';

export interface IJsonSettings {
    theme?: Theme;
    settingsPageHasBeenOpen?: boolean;
    isArticlesPageWasOpened?: boolean;
}
