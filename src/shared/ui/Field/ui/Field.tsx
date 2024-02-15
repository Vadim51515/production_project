import React, { type ChangeEvent, type FC } from 'react';
import { type IOption } from '../../../../app/types';
import { classNames } from '../../../lib/classNames/classNames';
import { Input } from '../../Input';
import { Select } from '../../Select';
import { Text } from '../../Text';
import styles from './Field.module.scss';
import { type TFieldProps } from '../types';

export const Field: FC<TFieldProps> = ({ fieldType, fieldName, isRequired, ...props }) => {
    const { className, label, error, dataTestId, onChange } = props;

    let Component = null;

    switch (fieldType) {
        case 'input':
            Component = Input;
            break;
        case 'select':
            Component = Select;
            break;
    }
    const onChangeField = (e: ChangeEvent<HTMLInputElement> | IOption<string>) => {
        switch (fieldType) {
            case 'input':
                if ('target' in e) {
                    console.log(e);
                    onChange(fieldName, e.target.value);
                }
                break;
            case 'select':
                if ('label' in e) {
                    onChange(fieldName, e.value);
                }
                break;
        }
    };
    return (
        <div className={classNames(styles.fieldContainer, {}, [className])}>
            <div className={styles.labelContainer}>
                <Text isPlaceholder>{label} </Text>

                {isRequired && (
                    <Text
                        className={styles.requiredSymbol}
                        tag="span"
                    >
                        *
                    </Text>
                )}
            </div>

            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-expect-error */}
            <Component
                {...props}
                withEventChange
                onChange={onChangeField}
                dataTestId={dataTestId}
            />

            {error && (
                <Text
                    className={styles.error}
                    dataTestId={`${dataTestId}ErrorText`}
                >
                    {error}
                </Text>
            )}
        </div>
    );
};
