import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from '../../../../app/providers/ThemeProvider'
import {
    type CFC,
    type Func
} from '../../../../app/types'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { Overlay } from '../../Overlay/ui/Overlay'
import { Portal } from '../../Portal/ui/Portal'
import styles from './Drawer.module.scss'

interface IDrawerProps {
    className?: string
    isOpen: boolean
    closeOnOutsideClick?: boolean
    onClose?: Func
}

export const Drawer: CFC<IDrawerProps> = ({
    className,
    isOpen,
    children,
    closeOnOutsideClick = true,
    onClose
}) => {
    const isUseClickOutside = isOpen && closeOnOutsideClick
    const { theme } = useTheme()

    const refForContent = useClickOutside(isUseClickOutside
        ? onClose
        : () => {})

    const mods = {
        [styles.opened]: isOpen
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
