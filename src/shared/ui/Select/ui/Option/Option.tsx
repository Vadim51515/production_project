import React, {
    type FC,
    memo
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import {
    type Func,
    type IOption
} from '../../../../../app/types'
import { Text } from '../../../Text'
import styles from './Option.module.scss'

interface IOptionProps {
    option: IOption
    onPressOption: Func<[IOption]>
}

export const Option: FC<IOptionProps> = memo(({ option, onPressOption }) => {
    const { label } = option

    return (
        <div className={classNames(styles.option, {}, [])} onClick={() => { onPressOption(option) }}>
            <Text isFieldText>{label}</Text>
        </div>
    )
})
