import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useActions } from '../../../../shared/hooks/useActions'
import { Button } from '../../../../shared/ui/Button'
import {
    userActions,
    userAuthDataSelector
} from '../../../User'
import { profileDataSelector } from '../../model/selectors/selectors'

interface IProfileLogoutBtnProps {
    className?: string
}

export const ProfileLogoutBtn: FC<IProfileLogoutBtnProps> = () => {
    const authData = useSelector(userAuthDataSelector)
    const profile = useSelector(profileDataSelector)
    const { logout } = useActions(userActions)

    const { t } = useTranslation()

    if (authData?.id !== profile?.id) return null

    return <Button onClick={logout}>{t('Выйти из аккаунта')}</Button>
}
