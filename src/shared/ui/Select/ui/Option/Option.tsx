import React from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type Func, type IOption } from '../../../../../app/types';
import { Text } from '../../../Text';
import styles from './Option.module.scss';

interface IOptionProps<T extends string> {
    option: IOption<T>;
    onPressOption: Func<[IOption<T>]>;
}

export const Option = <T extends string>({ option, onPressOption }: IOptionProps<T>) => {
    const { label } = option;

    return (
        <div
            className={classNames(styles.option, {}, [])}
            onClick={() => {
                onPressOption(option);
            }}
        >
            <Text isFieldText>{label}</Text>
        </div>
    );
};
