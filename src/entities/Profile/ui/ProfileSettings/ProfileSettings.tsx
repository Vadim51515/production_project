import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Field } from '../../../../shared/ui/Field/Field'
import { Text } from '../../../../shared/ui/Text'
import styles from './ProfileSettings.module.scss'

interface IProfileSettingsProps {
    className?: string
}

export const ProfileSettings: FC<IProfileSettingsProps> = ({ className }) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(styles.profileSettings, {}, [className])}>
            <Text
                className={styles.personalDataTitle}
                tag='h2'
            >{t('Настройки профиля')}</Text>
            <div className={'row'}>
                <Field
                    fieldType={'input'}
                    label={'Имя пользователя'}
                    isRequired
                    isFullWidth
                    isReadOnly
                    onChange={() => {}}
                />
                <Field
                    fieldType={'input'}
                    label={'Ссылка на аватар'}
                    isRequired
                    isFullWidth
                    isReadOnly
                    onChange={() => {}}
                />
                <Field
                    fieldType={'input'}
                    label={'Валюта'}
                    isRequired
                    isFullWidth
                    isReadOnly
                    onChange={() => {}}
                />

            </div>

        </div>
    )
}
