import React, { type FC, memo } from 'react';
import { type Func } from '../../../../app/types';
import RightArrow from '@/shared/assets/icons/right-arrow.svg?react';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import styles from './HideBtn.module.scss';
interface IHideBtnProps {
    onClick?: Func;
    isOpen: boolean;
}

export const HideBtn: FC<IHideBtnProps> = memo(({ onClick, isOpen }) => {
    return (
        <button
            onClick={onClick}
            data-testid="sidebar-toggle-size"
            className={classNames(styles.btn, { [styles.open]: isOpen })}
        >
            <RightArrow />
        </button>
    );
});
