import React, {
    type ChangeEvent,
    type FC,
    type InputHTMLAttributes,
    memo
} from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type Func } from '../../../../app/types'
import { type ISharedFieldComponentProps } from '../../../types'
import { Text } from '../../Text'
import styles from './Input.module.scss'

type TInputSize = ('sm' | 'md' | 'lg' | 'xl' | 'sizeContent')

type BaseInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> & ISharedFieldComponentProps & {
    size?: TInputSize
    isFullWidth?: boolean
}

export type InputPropsWithEvent = BaseInputProps & {
    withEventChange: true
    onChange: Func<[ChangeEvent<HTMLInputElement>]>
}

type InputPropsWithString = BaseInputProps & {
    withEventChange?: false
    onChange: Func<[string]>
}

export type IInputProps = InputPropsWithEvent | InputPropsWithString

export const Input: FC<IInputProps> = memo(({
    className,
    size = 'sizeContent',
    isFullWidth,
    withEventChange,
    onChange,
    isReadOnly,
    dataTestId,
    value = '',
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

    if (isReadOnly) return <Text dataTestId={`${dataTestId}ReadonlyText`}>{String(props.value)}</Text>

    return (
        <input
            data-testid={`${dataTestId}Input`}
            className={classNames(styles.input, mods, [className])}
            type='text'
            onChange={onChangeInput}
            value={value}
            {...props}
        />
    )
})
