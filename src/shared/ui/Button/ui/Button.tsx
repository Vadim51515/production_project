import React, {
    type ButtonHTMLAttributes,
    type FC
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'

type TButtonPattern = 'clear' | 'primary'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    pattern?: TButtonPattern
}

export const Button: FC<IButtonProps> = ({
    className,
    pattern = 'primary',
    ...buttonProps
}) => {
    return (
        <button
            className={classNames(
                styles.button,
                {},
                [
                    className,
                    styles[pattern]
                ]
            )}
            {...buttonProps}
        />
    )
}
