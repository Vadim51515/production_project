import React, {
    type FC,
    useState
} from 'react'
import {
    type Func,
    type IOption,
    type TOptions
} from '../../../../../app/types'
import { classNames } from '../../../../lib/classNames/classNames'
import { type ISharedFieldComponentProps } from '../../../../types'
import { Text } from '../../../Text'
import { Option } from '../Option/Option'
import styles from './Select.module.scss'
import RightArrow from 'shared/assets/icons/right-arrow.svg'

export interface ISelectProps extends ISharedFieldComponentProps {
    className?: string
    options: TOptions
    onChange: Func<[IOption]>
    value?: string
}

export const Select: FC<ISelectProps> = ({
    className,
    options,
    onChange,
    isReadOnly,
    value
}) => {
    const [isOpen, setIsOpen] = useState(false)

    const currentValueObj = options.find(option => option.value === value)

    if (isReadOnly) return <Text>{currentValueObj?.label}</Text>

    const onChangeSelect = (newValue: IOption) => {
        setIsOpen(false)
        onChange(newValue)
    }

    const selectMods = {
        [styles.openSelect]: isOpen,
        [styles.closeSelect]: !isOpen
    }

    return (
        <div className={styles.selectContainer}>
            <div
                className={classNames(styles.select, selectMods, [className])}
                onClick={() => { setIsOpen(state => !state) }}
            >
                {value && <Text isFieldText>{currentValueObj?.label}</Text>}
                <RightArrow />
            </div>

            {isOpen && <div className={styles.optionsContainer}>
                {options?.map((option) => (
                    <Option
                        key={option.value}
                        option={option}
                        onPressOption={onChangeSelect}
                    />
                ))}
            </div>}
        </div>

    )
}
