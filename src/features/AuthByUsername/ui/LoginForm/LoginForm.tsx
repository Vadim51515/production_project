import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { useActions } from '../../../../shared/hooks/useActions'
import { useParamSelector } from '../../../../shared/hooks/useParamSelector'
import { Button } from '../../../../shared/ui/Button'
import { Input } from '../../../../shared/ui/Input'
import { Text } from '../../../../shared/ui/Text'
import { loginActions } from '../../model/actions'
import {
    loginSelector
} from '../../model/selectors/selectors'
import styles from './LoginForm.module.scss'

interface ILoginFormProps {
    className?: string
}

export const LoginForm: FC<ILoginFormProps> = () => {
    const {
        username,
        password,
        isLoading,
        error
    } = useParamSelector(loginSelector)

    const {
        setPassword,
        setUsername,
        loginByUsername
    } = useActions(loginActions)

    const { t } = useTranslation()

    const onSubmit = () => {
        loginByUsername({
            username,
            password
        })
    }

    return (
        <div className={classNames(styles.container, {})}>
            <div className={styles.loginContainer}>
                <p>{t('Логин')}</p>
                <Input
                    onChange={setUsername}
                    isFullWidth
                    autoFocus
                    value={username}
                />
            </div>

            <div className={styles.passwordContainer}>
                <p>{t('Пароль')}</p>
                <Input
                    onChange={setPassword}
                    isFullWidth
                    type={'password'}
                    value={password}
                />
            </div>
            <Text isError>{error}</Text>
            <Button
                isDisabled={isLoading}
                onClick={onSubmit}
            >{t('Войти')}</Button>
        </div>
    )
}
