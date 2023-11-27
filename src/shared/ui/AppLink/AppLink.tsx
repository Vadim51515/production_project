import React, { type FC } from 'react'
import {
    Link,
    type LinkProps
} from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'

type TAppLinkPattern = 'primary' | 'button'

interface IAppLinkProps extends LinkProps {
    className?: string
    pattern?: TAppLinkPattern
}

export const AppLink: FC<IAppLinkProps> = ({
    className,
    to,
    children,
    pattern = 'primary'
}) => {
    return (
        <Link
            to={to}
            className={classNames(
                styles.appLink,
                {},
                [
                    className,
                    styles[pattern]
                ]
            )}
        >
            {children}
        </Link>
    )
}