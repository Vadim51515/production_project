import React, { type HTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type CFC } from '../../../app/types';
import styles from './Card.module.scss';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    pattern?: 'normal' | 'outline';
}

export const Card: CFC<ICardProps> = ({ className, children, pattern = 'normal', ...props }) => {
    const mods = {
        [styles.outline]: pattern === 'outline',
    };
    return (
        <div
            className={classNames(styles.card, mods, [className])}
            {...props}
        >
            {children}
        </div>
    );
};
