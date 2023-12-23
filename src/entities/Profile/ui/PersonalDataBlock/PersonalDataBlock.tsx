import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Field } from '../../../../shared/ui/Field/Field'
import { Text } from '../../../../shared/ui/Text'
import {
    profileFirstNameSelector,
    profileSurnameSelector
} from '../../model/selectors/selectors'
import { ProfileAvatar } from '../ProfileAvatar/ProfileAvatar'
import styles from './PersonalDataBlock.module.scss'

interface IPersonalDataBlockProps {
    className?: string
}

export const PersonalDataBlock: FC<IPersonalDataBlockProps> = ({ className }) => {
    const firstName = useSelector(profileFirstNameSelector)
    const surname = useSelector(profileSurnameSelector)

    const { t } = useTranslation()

    return (
        <div className={classNames(styles.personalData, {}, [className])}>
            <ProfileAvatar />
            <div className={styles.personalDataContainer}>
                <Text
                    className={styles.personalDataTitle}
                    tag='h2'
                >{t('Личные данные')}</Text>
                <div className={styles.nameContainer}>
                    <Field
                        fieldType={'input'}
                        label={'Имя'}
                        isRequired
                        isFullWidth
                        isReadOnly
                        onChange={() => {}}
                        value={firstName}
                    />

                    <Field
                        fieldType={'input'}
                        label={'Фамилия'}
                        isFullWidth
                        onChange={() => {}}
                        value={surname}
                    />
                </div>
                <div className={styles.nameContainer}>
                    <Field
                        fieldType={'input'}
                        label={'Дата рождения'}
                        isRequired
                        isFullWidth
                        onChange={() => {}}
                    />

                    <Field
                        fieldType={'input'}
                        label={'Город'}
                        isFullWidth
                        onChange={() => {}}
                    />
                </div>
            </div>
        </div>
    )
}
