import React, { type FC } from 'react'
import { classNames } from '../../../lib/classNames/classNames'
import styles from './Avatar.module.scss'
interface IAvatarProps {
    className?: string
    image: string | undefined
    alt?: string
}

export const Avatar: FC<IAvatarProps> = ({ className, image, alt }) => {
    return (
        <img
            src={image}
            alt={alt}
            className={classNames(styles.avatar, {}, [className])}
        />
    )
}
