import React, { useState } from 'react';
import { type Func, type IOption, type TOptions } from '../../../../../app/types';
import { classNames } from '../../../../lib/classNames/classNames';
import { type ISharedFieldComponentProps } from '../../../../types';
import { Text } from '../../../Text';
import { Option } from '../Option/Option';
import styles from './Select.module.scss';
import RightArrow from '@/shared/assets/icons/right-arrow.svg?react';

export interface ISelectProps<T extends string> extends ISharedFieldComponentProps {
    className?: string;
    options: TOptions<T>;
    onChange: Func<[IOption<T>]>;
    value?: T;
    placeholder?: string;
    dataTestId?: string;
}

export const Select = <T extends string>({
    className,
    options,
    onChange,
    isReadOnly,
    value,
    placeholder,
    dataTestId,
}: ISelectProps<T>) => {
    const [isOpen, setIsOpen] = useState(false);

    const currentValueObj = options.find((option) => option.value === value);

    if (isReadOnly) return <Text>{currentValueObj?.label}</Text>;

    const onChangeSelect = (newValue: IOption<T>) => {
        setIsOpen(false);
        onChange(newValue);
    };

    const selectMods = {
        [styles.openSelect]: isOpen,
        [styles.closeSelect]: !isOpen,
    };

    return (
        <div className={styles.selectContainer}>
            <div
                data-testid={`${dataTestId}Select`}
                className={classNames(styles.select, selectMods, [className])}
                onClick={() => {
                    setIsOpen((state) => !state);
                }}
            >
                <div className={styles.content}>
                    {value ? (
                        <Text isFieldText>{currentValueObj?.label}</Text>
                    ) : (
                        <Text isPlaceholder>{placeholder}</Text>
                    )}
                </div>
                <RightArrow />
            </div>

            {isOpen && (
                <div className={styles.optionsContainer}>
                    {options?.map((option) => (
                        <Option
                            key={option.value}
                            option={option}
                            onPressOption={onChangeSelect}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
