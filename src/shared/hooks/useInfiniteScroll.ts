import {
    type RefObject,
    useEffect,
    useRef
} from 'react'
import { type Func } from '../../app/types'

export type TUseInfiniteScrollResult<T extends HTMLElement = HTMLElement> = [wrapperRef: RefObject<T>, RefObject<T>]
export const useInfiniteScroll = <T extends HTMLElement = HTMLElement>
    (callback?: Func): TUseInfiniteScrollResult<T> => {
    const observer = useRef<IntersectionObserver | null>(null)
    const wrapperRef = useRef<T>(null)
    const triggerRef = useRef<T>(null)

    useEffect(
        () => {
            const triggerElement = triggerRef.current

            if (callback) {
                const options = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 1.0
                }

                observer.current = new IntersectionObserver(([entry]) => {
                    if (entry.isIntersecting) {
                        callback()
                    }
                }, options)

                if (triggerElement) observer.current.observe(triggerElement)
            }

            return () => {
                if (observer.current && triggerElement) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    observer.current.unobserve(triggerElement)
                }
            }
        },
        [
            callback,
            triggerRef,
            wrapperRef
        ]
    )

    return [
        wrapperRef,
        triggerRef
    ]
}
