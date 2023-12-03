import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'

interface ILangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<ILangSwitcherProps> = () => {
    const {
        t,
        i18n
    } = useTranslation()

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru'
            ? 'en'
            : 'ru')
    }

    return (
        <div>
            <button onClick={changeLanguage}>{t('Язык')}</button>
        </div>
    )
}
