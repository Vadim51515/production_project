import React from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type CFC } from '../../../../app/types'
import styles from './Overlay.module.scss'

interface IOverlayProps {
    className?: string
}

export const Overlay: CFC<IOverlayProps> = ({
    className,
    children
}) => {
    return (
        <div className={classNames(styles.overlay, {}, [className])}>
            {children}
        </div>
    )
}
