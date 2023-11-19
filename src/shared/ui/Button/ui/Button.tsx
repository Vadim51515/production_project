import React, {
    ButtonHTMLAttributes,
    FC,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

type TButtonPattern = 'clear' | ''

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    pattern?: TButtonPattern;
}

export const Button: FC<IButtonProps> = ({
    className,
    pattern = 'clear',
    ...buttonProps
}) => {

    return (
        <button
            className={classNames(
                styles.button,
                {},
                [
                    className,
                    styles[pattern],
                ],
            )}
            {...buttonProps}
        />
    );
};