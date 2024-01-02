import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { CURRENCIES } from '../../../../app/constans'
import { Text } from '../../../../shared/ui/Text'
import { ProfileField } from '../ProfileField/ProfileField'

interface IProfileSettingsProps {
    className?: string
}

export const ProfileSettings: FC<IProfileSettingsProps> = () => {
    const { t } = useTranslation()

    return (
        <div>
            <Text tag='h2'>{t('Настройки профиля')}</Text>
            <div className={'row'}>
                <ProfileField
                    fieldName={'username'}
                    label={t('Имя пользователя')}
                    isRequired
                />

                <ProfileField
                    fieldName={'avatar'}
                    label={t('Ссылка на аватар')}
                />

                <ProfileField
                    fieldName={'currency'}
                    fieldType={'select'}
                    label={t('Валюта')}
                    options={CURRENCIES}
                />
            </div>
        </div>
    )
}
