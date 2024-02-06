import React, { type FC, memo, type ReactElement } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

type TAppLinkPattern = 'primary' | 'button';

interface IAppLinkProps extends Omit<LinkProps, 'prefix'> {
    className?: string;
    classNameContent?: string;
    pattern?: TAppLinkPattern;
    postfix?: ReactElement;
    prefix?: ReactElement;
}

export const AppLink: FC<IAppLinkProps> = memo(
    ({ className, to, children, pattern = 'primary', postfix, prefix, classNameContent, ...props }) => {
        return (
            <Link
                to={to}
                className={classNames(styles.appLink, {}, [className, styles[pattern]])}
                {...props}
            >
                <span className={styles.prefix}>{prefix}</span>
                <span className={classNames(styles.appLinkContent, {}, [classNameContent])}>{children}</span>
                <span className={styles.postfix}>{postfix}</span>
            </Link>
        );
    },
);
