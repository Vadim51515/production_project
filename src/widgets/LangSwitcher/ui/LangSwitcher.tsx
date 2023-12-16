import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'

interface ILangSwitcherProps {
    className?: string
    isShortName?: boolean
}

export const LangSwitcher: FC<ILangSwitcherProps> = ({ isShortName }) => {
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
            <button onClick={changeLanguage}>{t(isShortName
                ? 'Короткий язык'
                : 'Язык')}</button>
        </div>
    )
}
