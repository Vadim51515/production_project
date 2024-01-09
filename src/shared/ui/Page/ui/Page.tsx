import React from 'react'
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll'
import { classNames } from '../../../lib/classNames/classNames'
import {
    type CFC,
    type Func
} from '../../../../app/types'
import styles from './Page.module.scss'

interface IPageProps {
    className?: string
    onScrollEnd?: Func
}

export const Page: CFC<IPageProps> = ({
    className,
    children,
    onScrollEnd
}) => {
    const [wrapperRef, triggerRef] = useInfiniteScroll<HTMLDivElement>(onScrollEnd)

    return (
        <section
            ref={wrapperRef}
            className={classNames(styles.page, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    )
}
