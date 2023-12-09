import React, {
    type ButtonHTMLAttributes,
    type FC
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'

type TButtonPattern = 'clear' | 'primary' | 'outline'
type TButtonSize = ('sm' | 'md' | 'lg' | 'xl' | 'sizeContent')

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    pattern?: TButtonPattern
    size?: TButtonSize
    isFullWidth?: boolean
    isRound?: boolean
}

export const Button: FC<IButtonProps> = ({
    className,
    pattern = 'primary',
    size = 'sizeContent',
    isFullWidth,
    isRound,
    ...buttonProps
}) => {
    const mods = {
        [styles[size]]: size,
        [styles.fullWidth]: isFullWidth,
        [styles.round]: isRound
    }
    return (
        <button
            className={classNames(
                styles.button,
                mods,
                [
                    className,
                    styles[pattern]
                ]
            )}
            {...buttonProps}
        />
    )
}
