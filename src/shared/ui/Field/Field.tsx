import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Input } from '../Input'
import { Text } from '../Text'
import styles from './Field.module.scss'
import {
    type TFieldProps
} from './types'

export const Field: FC<TFieldProps> = (props) => {
    const {
        className,
        label,
        isRequired,
        error
    } = props
    const Component = Input

    return (
        <div className={classNames(styles.fieldContainer, {}, [className])}>
            <div className={styles.labelContainer}>
                <Text isPlaceholder>{label}{' '}</Text>

                {isRequired && <Text className={styles.requiredSymbol} tag='span'>*</Text>}
            </div>
            <Component
                {...props}
            />

            {error && <Text className={styles.error}>{error}</Text>}
        </div>
    )
}
