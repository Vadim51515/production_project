import React, { type FC } from 'react'
import IconLoader from 'shared/assets/icons/loader.svg'
import { classNames } from '../../../lib/classNames/classNames'
import styles from './Loader.module.scss'

interface ILoaderProps {
    className?: string
    isWithBackground?: boolean
}

export const Loader: FC<ILoaderProps> = ({
    className,
    isWithBackground = true
}) => {
    const mods = {
        [styles.withBackground]: isWithBackground
    }

    return (
        <div className={classNames(styles.loaderContainer, mods, [className])}>
            <IconLoader className={styles.loaderSpinner} />
        </div>
    )
}
