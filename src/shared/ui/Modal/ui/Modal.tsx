import React from 'react';
import { useModal } from '../../../hooks/useModal';
import { classNames } from '../../../lib/classNames/classNames';
import { type CFC } from '../../../../app/types';
import { Overlay } from '../../Overlay/ui/Overlay';
import { Portal } from '../../Portal/ui/Portal';
import { type IModalProps } from '../types';
import styles from './Modal.module.scss';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';

export const Modal: CFC<IModalProps> = ({
    className,
    children,
    onClose,
    isOpen,
    footerProps,
    headerProps,
    isLazy,
    dataTestId,
}) => {
    const { close, isClosing, isMounted, refForContent } = useModal({
        onClose,
        isOpen,
    });

    const mods = {
        [styles.opened]: isOpen,
        [styles.closing]: isClosing,
    };

    if (isLazy && !isMounted) return null;

    return (
        <Portal>
            <div className={classNames(styles.modal, mods)}>
                <Overlay>
                    <div
                        ref={refForContent}
                        className={classNames(styles.container, {}, [className])}
                    >
                        <ModalHeader
                            onCloseModal={close}
                            {...headerProps}
                        />
                        <div className={styles.content}>{children}</div>
                        {footerProps && (
                            <ModalFooter
                                dataTestId={dataTestId}
                                onCloseModal={close}
                                {...footerProps}
                            />
                        )}
                    </div>
                </Overlay>
            </div>
        </Portal>
    );
};
