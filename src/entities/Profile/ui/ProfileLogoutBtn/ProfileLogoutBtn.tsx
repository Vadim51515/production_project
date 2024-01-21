import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useActions } from '../../../../shared/hooks/useActions'
import { Button } from '../../../../shared/ui/Button'
import { userActions } from '../../../User'

interface IProfileLogoutBtnProps {
    className?: string
}

export const ProfileLogoutBtn: FC<IProfileLogoutBtnProps> = () => {
    const { logout } = useActions(userActions)

    const { t } = useTranslation()

    return <Button onClick={logout}>{t('Выйти из аккаунта')}</Button>
}
