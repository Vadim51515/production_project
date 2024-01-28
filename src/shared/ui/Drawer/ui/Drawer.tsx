import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from '../../../../app/providers/ThemeProvider'
import {
    type CFC,
    type Func
} from '../../../../app/types'
import { useModal } from '../../../hooks/useModal'
import { Overlay } from '../../Overlay/ui/Overlay'
import { Portal } from '../../Portal/ui/Portal'
import styles from './Drawer.module.scss'

interface IDrawerProps {
    className?: string
    isOpen: boolean
    closeOnOutsideClick?: boolean
    onClose: Func
}

export const Drawer: CFC<IDrawerProps> = ({
    className,
    isOpen,
    children,
    onClose
}) => {
    const { theme } = useTheme()
    const {
        refForContent,
        isClosing
    } = useModal({
        onClose,
        isOpen
    })

    const mods = {
        [styles.opened]: isOpen,
        [styles.closing]: isClosing
    }

    return (
        <Portal>
            <div className={classNames(styles.drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay className={styles.overlay}>
                    <div
                        ref={refForContent}
                        className={classNames(styles.content, {}, [className])}
                    >
                        {children}
                    </div>
                </Overlay>

            </div>
        </Portal>
    )
}
