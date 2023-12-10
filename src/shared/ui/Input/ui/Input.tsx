import React, {
    type ChangeEvent,
    type FC,
    type InputHTMLAttributes
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { type Func } from '../../../../app/types'
import styles from './Input.module.scss'

type TInputSize = ('sm' | 'md' | 'lg' | 'xl' | 'sizeContent')

type BaseInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> & {
    className?: string
    size?: TInputSize
    isFullWidth?: boolean
}

type InputPropsWithEvent = BaseInputProps & {
    withEventChange: true
    onChange: Func<[ChangeEvent<HTMLInputElement>]>
}

type InputPropsWithString = BaseInputProps & {
    withEventChange?: false
    onChange: Func<[string]>
}

type IInputProps = InputPropsWithEvent | InputPropsWithString

export const Input: FC<IInputProps> = ({
    className,
    size = 'sizeContent',
    isFullWidth,
    withEventChange,
    onChange,
    ...props
}) => {
    const mods = {
        [styles.fullWidth]: isFullWidth,
        [styles[size]]: size
    }

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        if (withEventChange) onChange(event)
        else onChange(event.target.value)
    }

    return (
        <input
            className={classNames(styles.input, mods, [className])}
            type='text'
            onChange={onChangeInput}
            {...props}
        />
    )
}
