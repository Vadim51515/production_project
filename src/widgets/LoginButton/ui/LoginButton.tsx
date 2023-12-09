import React, { useState, type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../shared/ui/Button'
import { Modal } from '../../../shared/ui/Modal'
import styles from './LoginButton.module.scss'
interface ILoginButtonProps {
    className?: string
}

export const LoginButton: FC<ILoginButtonProps> = () => {
    const [isVisibleAuthModal, setIsVisibleAuthModal] = useState(true)
    const { t } = useTranslation()

    const onCloseModal = useCallback(() => {
        setIsVisibleAuthModal(false)
    }, [])

    return <>
        <Button className={styles.loginBtn} onClick={() => { setIsVisibleAuthModal(true) }}>{t('Войти')}</Button>
        <Modal
            isOpen={isVisibleAuthModal}
            onClose={onCloseModal}
            headerProps={{
                title: 'Авторизация'
            }}
            footerProps={{
                onCancel: onCloseModal,
                onConfirm: onCloseModal
            }}
        >
            <p>{t('В будущем тут будет экран логина')}</p>
            <p>{t('В будущем тут будет экран логина')}</p>
            <p>{t('В будущем тут будет экран логина')}</p>
            <p>{t('В будущем тут будет экран логина')}</p>
            <p>{t('В будущем тут будет экран логина')}</p>
            <p>{t('В будущем тут будет экран логина')}</p>
            <p>{t('В будущем тут будет экран логина')}</p>
            <p>{t('В будущем тут будет экран логина')}</p>
            <p>{t('В будущем тут будет экран логина')}</p>
        </Modal>
    </>
}
