import React, {
    type ButtonHTMLAttributes,
    type FC
} from 'react'
import { classNames } from '../../../lib/classNames/classNames'
import styles from './Button.module.scss'

type TButtonPattern = 'clear' | 'primary' | 'outline'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    pattern?: TButtonPattern
    isFullWidth?: boolean
    isRound?: boolean
}

export const Button: FC<IButtonProps> = ({
    className,
    pattern = 'primary',
    isFullWidth,
    isRound,
    ...buttonProps
}) => {
    const mods = {
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
