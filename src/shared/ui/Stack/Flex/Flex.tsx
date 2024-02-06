import React, { type DetailedHTMLProps, type HTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type CFC } from '../../../../app/types';
import styles from './Flex.module.scss';

export type IFlexJustify = 'start' | 'center' | 'end' | 'between';
export type IFlexAlign = 'start' | 'center' | 'end';
export type IFlexDirection = 'row' | 'column';
export type IFlexGap = '4' | '8' | '10' | '16' | '32';

const justifyClasses: Record<IFlexJustify, string> = {
    start: styles.justifyStart,
    center: styles.justifyCenter,
    end: styles.justifyEnd,
    between: styles.justifyBetween,
};

const alignClasses: Record<IFlexAlign, string> = {
    start: styles.alignStart,
    center: styles.alignCenter,
    end: styles.alignEnd,
};

const directionClasses: Record<IFlexDirection, string> = {
    row: styles.directionRow,
    column: styles.directionColumn,
};

const gapClasses: Record<IFlexGap, string> = {
    4: styles.gap4,
    8: styles.gap8,
    10: styles.gap10,
    16: styles.gap16,
    32: styles.gap32,
};

export interface IFlexProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    className?: string;
    justify?: IFlexJustify;
    align?: IFlexAlign;
    direction?: IFlexDirection;
    gap?: IFlexGap;
    max?: boolean;
}

export const Flex: CFC<IFlexProps> = ({
    max,
    gap,
    align = 'start',
    children,
    justify = 'start',
    direction = 'row',
    className,
}) => {
    const classes = [
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
        className,
    ];

    const mods = {
        [styles.max]: max,
    };

    return <div className={classNames(styles.flex, mods, classes)}>{children}</div>;
};
