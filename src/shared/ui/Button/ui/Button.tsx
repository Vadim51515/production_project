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
    isDisabled?: boolean
    isLoading?: boolean
}

export const Button: FC<IButtonProps> = ({
    className,
    pattern = 'primary',
    isFullWidth,
    isRound,
    isDisabled,
    ...buttonProps
}) => {
    const mods = {
        [styles.fullWidth]: isFullWidth,
        [styles.round]: isRound,
        [styles.disabled]: isDisabled
    }

    return (
        <button
            disabled={isDisabled}
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
