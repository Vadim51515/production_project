import React, { type UIEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { useActions } from '../../../shared/hooks/useActions'
import { useInfiniteScroll } from '../../../shared/hooks/useInfiniteScroll'
import { useInitialEffect } from '../../../shared/hooks/useInitialEffect'
import { useParamSelector } from '../../../shared/hooks/useParamSelector'
import { useThrottle } from '../../../shared/hooks/useThrottle'
import { classNames } from '../../../shared/lib/classNames/classNames'
import {
    type CFC,
    type Func
} from '../../../app/types'
import {
    uiPageActions
} from '../model/actions'
import { uiPageScrollByPathSelector } from '../model/selectors/uiPage'
import styles from './Page.module.scss'

interface IPageProps {
    className?: string
    onScrollEnd?: Func
    dataTestId?: string
}

export const Page: CFC<IPageProps> = ({
    className,
    children,
    onScrollEnd,
    dataTestId
}) => {
    const [wrapperRef, triggerRef] = useInfiniteScroll<HTMLDivElement>(onScrollEnd)

    const { pathname } = useLocation()
    const scrollPosition = useParamSelector(uiPageScrollByPathSelector, pathname)

    const { setScrollPosition } = useActions(uiPageActions)
    useInitialEffect(() => {
        if (wrapperRef.current?.scrollTop) wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname
        })
    }, 200)

    return (
        <section
            data-testid={dataTestId}
            ref={wrapperRef}
            className={classNames(styles.page, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            {onScrollEnd && <div className={styles.trigger} ref={triggerRef} />}
        </section>
    )
}
