import React, {
    type FC,
    memo
} from 'react'
import { useTranslation } from 'react-i18next'
import {
    useSelector
} from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useActions } from '../../../../shared/hooks/useActions'
import { useAsyncReducer } from '../../../../shared/hooks/useAsyncReducer'
import { Button } from '../../../../shared/ui/Button'
import { Input } from '../../../../shared/ui/Input'
import { Text } from '../../../../shared/ui/Text'
import { loginActions } from '../../model/actions'
import {
    loginErrorSelector,
    loginIsLoadingSelector,
    loginPasswordSelector,
    loginUsernameSelector
} from '../../model/selectors/selectors'
import { loginReducer } from '../../model/slice/loginSlice'
import styles from './LoginForm.module.scss'

export interface ILoginFormProps {
    className?: string
}

const initialReducers = {
    login: loginReducer
}
const LoginForm: FC<ILoginFormProps> = memo(() => {
    useAsyncReducer(initialReducers, true)

    const username = useSelector(loginUsernameSelector)
    const password = useSelector(loginPasswordSelector)
    const isLoading = useSelector(loginIsLoadingSelector)
    const error = useSelector(loginErrorSelector)

    const {
        setPassword,
        setUsername,
        loginByUsername
    } = useActions(loginActions)

    const { t } = useTranslation()

    const onSubmit = async () => {
        loginByUsername({
            username,
            password
        })
    }

    console.log('username', username)

    return (
        <div className={classNames(styles.container, {})}>
            <div className={styles.loginContainer}>
                <Text>{t('Логин')}</Text>
                <Input
                    onChange={setUsername}
                    isFullWidth
                    autoFocus
                    value={username}
                />
            </div>

            <div className={styles.passwordContainer}>
                <Text>{t('Пароль')}</Text>
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
})
export default LoginForm
