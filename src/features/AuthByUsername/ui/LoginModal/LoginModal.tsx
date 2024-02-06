import React, { type FC, Suspense, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../shared/ui/Button';
import { Loader } from '../../../../shared/ui/Loader';
import { Modal } from '../../../../shared/ui/Modal';
import { LazyLoginForm } from '../LoginForm/LoginForm.lazy';

import styles from './LoginModal.module.scss';

interface ILoginModalProps {
    className?: string;
}

export const LoginModal: FC<ILoginModalProps> = () => {
    const [isVisibleAuthModal, setIsVisibleAuthModal] = useState(false);
    const { t } = useTranslation();

    const onCloseModal = useCallback(() => {
        setIsVisibleAuthModal(false);
    }, []);
    return (
        <>
            <Button
                className={styles.loginBtn}
                onClick={() => {
                    setIsVisibleAuthModal(true);
                }}
            >
                {t('Войти')}
            </Button>
            {isVisibleAuthModal && (
                <Modal
                    headerProps={{
                        title: t('Форма авторизации'),
                    }}
                    isOpen={isVisibleAuthModal}
                    onClose={onCloseModal}
                    className={styles.loginModal}
                    isLazy
                >
                    <Suspense fallback={<Loader />}>
                        <LazyLoginForm />
                    </Suspense>
                </Modal>
            )}
        </>
    );
};
