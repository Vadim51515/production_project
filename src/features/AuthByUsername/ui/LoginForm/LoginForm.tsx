import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from '../../../../shared/ui/Input/ui/Input'
import styles from './LoginForm.module.scss'

interface ILoginFormProps {
    className?: string
}

export const LoginForm: FC<ILoginFormProps> = () => {
    const { t } = useTranslation()
    const onLogin = (value: string) => {
        console.log('value', value)
    }

    const onPassword = (value: string) => {
        console.log('value', value)
    }

    return (
        <div className={classNames(styles.container, {})}>
            <div className={styles.loginContainer}>
                <p>{ t('Логин')}</p>
                <Input
                    onChange={onLogin}
                    isFullWidth
                    autoFocus
                />
            </div>

            <div className={styles.passwordContainer}>
                <p>{ t('Пароль')}</p>
                <Input
                    onChange={onPassword}
                    isFullWidth
                    type={'password'}
                />
            </div>
        </div>
    )
}
