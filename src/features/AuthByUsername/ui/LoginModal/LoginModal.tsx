import React, {
    type FC,
    useCallback,
    useState
} from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../../../shared/ui/Button'
import { Modal } from '../../../../shared/ui/Modal'
import styles from './LoginModal.module.scss'
import { LoginForm } from '../LoginForm/LoginForm'

interface ILoginModalProps {
    className?: string
}

export const LoginModal: FC<ILoginModalProps> = () => {
    const [isVisibleAuthModal, setIsVisibleAuthModal] = useState(true)
    const { t } = useTranslation()

    const onCloseModal = useCallback(() => {
        setIsVisibleAuthModal(false)
    }, [])

    const onConfirm = () => {

    }

    return (
        <>
            <Button className={styles.loginBtn} onClick={() => { setIsVisibleAuthModal(true) }}>{t('Войти')}</Button>
            <Modal
                headerProps={{
                    title: t('Аутентификация')
                }}
                isOpen={isVisibleAuthModal}
                onClose={onCloseModal}
                className={styles.loginModal}
                footerProps={{
                    onConfirm,
                    confirmText: t('Войти')
                }}
                isLazy
            >
                <LoginForm />
            </Modal>
        </>

    )
}
