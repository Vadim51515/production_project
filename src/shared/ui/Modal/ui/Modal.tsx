import React, {
    useEffect,
    useRef,
    useState,
    useCallback
} from 'react'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { classNames } from '../../../lib/classNames/classNames'
import {
    type CFC
} from '../../../../app/types'
import { Overlay } from '../../Overlay/ui/Overlay'
import { Portal } from '../../Portal/ui/Portal'
import { type IModalProps } from '../types'
import styles from './Modal.module.scss'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'

const DELAY_CLOSE_ANIMATION = 300
export const Modal: CFC<IModalProps> = ({
    className,
    children,
    onClose,
    isOpen,
    closeOnOutsideClick = true,
    closeOnPressEsc = true,
    footerProps,
    headerProps,
    isLazy
}) => {
    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = useCallback((callback = onClose) => {
        setIsClosing(true)
        timerRef.current = setTimeout(() => {
            callback()
            setIsClosing(false)
        }, DELAY_CLOSE_ANIMATION)
    }, [onClose])

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') closeHandler()
    }, [closeHandler])

    useEffect(() => {
        if (isOpen && closeOnPressEsc) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [closeOnPressEsc, isOpen, onKeyDown])

    useEffect(() => {
        if (isOpen) setIsMounted(true)
    }, [isOpen])

    const isUseClickOutside = isOpen && closeOnOutsideClick

    const refForContent = useClickOutside(isUseClickOutside
        ? closeHandler
        : () => {})

    const mods = {
        [styles.opened]: isOpen,
        [styles.closing]: isClosing
    }

    if (isLazy && !isMounted) return null

    return (
        <Portal>
            <div className={classNames(styles.modal, mods)}>
                <Overlay>
                    <div
                        ref={refForContent}
                        className={classNames(styles.container, {}, [className])}
                    >
                        <ModalHeader onCloseModal={closeHandler} {...headerProps} />
                        <div className={styles.content}>
                            {children}
                        </div>
                        {footerProps && <ModalFooter onCloseModal={closeHandler} {...footerProps} />}
                    </div>
                </Overlay>
            </div>
        </Portal>
    )
}
