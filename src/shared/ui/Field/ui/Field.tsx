import React, {
    type ChangeEvent,
    type FC
} from 'react'
import { type IOption } from '../../../../app/types'
import { classNames } from '../../../lib/classNames/classNames'
import { Input } from '../../Input'
import { Select } from '../../Select'
import { Text } from '../../Text'
import styles from './Field.module.scss'
import {
    type TFieldProps
} from '../types'

export const Field: FC<TFieldProps> = (props) => {
    const {
        className,
        label,
        isRequired,
        error,
        fieldName,
        fieldType
    } = props

    let Component = null

    switch (fieldType) {
    case 'input':
        Component = Input
        break
    case 'select':
        Component = Select
        break
    }
    const onChangeField = (e: ChangeEvent<HTMLInputElement> | IOption<string>) => {
        switch (fieldType) {
        case 'input':
            if ('target' in e) props.onChange(fieldName, e.target.value)
            break
        case 'select':
            props.onChange(fieldName, e as IOption<string>)
            break
        }
    }

    return (
        <div className={classNames(styles.fieldContainer, {}, [className])}>
            <div className={styles.labelContainer}>
                <Text isPlaceholder>{label}{' '}</Text>

                {isRequired && <Text className={styles.requiredSymbol} tag='span'>*</Text>}
            </div>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-expect-error */}
            <Component
                {...props}
                withEventChange
                onChange={onChangeField}
            />

            {error && <Text className={styles.error}>{error}</Text>}
        </div>
    )
}
