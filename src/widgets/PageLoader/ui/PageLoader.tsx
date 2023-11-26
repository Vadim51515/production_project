import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from '../../../shared/ui/Loader'
import styles from './PageLoader.module.scss'

interface IPageLoaderProps {
    className?: string
}

export const PageLoader: FC<IPageLoaderProps> = ({ className }) => {
    return (
        <div className={classNames(styles.pageLoader, {}, [className])}>
            <Loader />
        </div>
    )
}
