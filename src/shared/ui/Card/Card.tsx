import React, { type HTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { type CFC } from '../../../app/types'
import styles from './Card.module.scss'

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
}

export const Card: CFC<ICardProps> = ({
    className,
    children,
    ...props
}) => {
    return (
        <div className={classNames(styles.card, {}, [className])} {...props}>
            {children}
        </div>
    )
}
