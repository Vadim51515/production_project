import React, { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { type IOption, type TOptions } from '../../../app/types';
import { Select } from '../../../shared/ui/Select';
import styles from './LangSwitcher.module.scss';
interface ILangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<ILangSwitcherProps> = memo(() => {
    const { i18n, t } = useTranslation();

    const changeLanguage = (item: IOption<string>) => {
        i18n.changeLanguage(item.value);
    };

    const langOptions: TOptions<string> = [
        {
            label: 'Русский',
            value: 'ru',
        },
        {
            label: 'English',
            value: 'en',
        },
    ];

    return (
        <Select
            className={styles.langSwitcher}
            placeholder={t('Выбор языка')}
            options={langOptions}
            onChange={changeLanguage}
            value={i18n.language ?? 'ru'}
        />
    );
});
