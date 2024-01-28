import React, {
    type CSSProperties,
    type FC
} from 'react'
import { classNames } from '../../../lib/classNames/classNames'
import styles from './Avatar.module.scss'
import defaultUserIcon from '@/shared/assets/icons/defaultUserIcon.png'

interface IAvatarProps {
    className?: string
    image: string | undefined
    alt?: string
    size?: number
}

export const Avatar: FC<IAvatarProps> = ({
    className,
    image,
    alt,
    size
}) => {
    const style: CSSProperties = {
        height: size,
        width: size
    }

    return (
        <img
            style={style}
            src={image ?? defaultUserIcon}
            alt={alt}
            className={classNames(styles.avatar, {}, [className])}
        />
    )
}
