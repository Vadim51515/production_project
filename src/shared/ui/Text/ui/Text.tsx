import React, { type CSSProperties, memo } from 'react';
import { type CFC } from '../../../../app/types';
import { classNames } from '../../../lib/classNames/classNames';
import styles from './Text.module.scss';
type ITextTag = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface ITextProps {
    className?: string;
    tag?: ITextTag;
    isError?: boolean;
    isPrimary?: boolean;
    isPlaceholder?: boolean;
    isFieldText?: boolean;
    withMarginBottom?: boolean;
    isCenter?: boolean;
    marginBottom?: number;
    dataTestId?: string;
}

export const Text: CFC<ITextProps> = memo(
    ({
        className,
        tag = 'p',
        isError,
        isPrimary,
        isPlaceholder,
        isFieldText,
        children,
        withMarginBottom,
        isCenter,
        marginBottom = 10,
        dataTestId,
    }) => {
        const Tag = tag; // Используем span, если тип тега не передан
        const mods = {
            [styles.error]: isError,
            [styles.primary]: isPrimary,
            [styles.placeholder]: isPlaceholder,
            [styles.fieldText]: isFieldText,
            [styles.centerText]: isCenter,
        };

        const style: CSSProperties = {
            marginBottom: withMarginBottom ? marginBottom : undefined,
        };

        return (
            <Tag
                data-testid={dataTestId}
                style={style}
                className={classNames(styles.text, mods, [className, styles[tag]])}
            >
                {children}
            </Tag>
        );
    },
);
