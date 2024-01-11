import {
    useCallback,
    useRef
} from 'react'
import { type Func } from '../../app/types'

export const useThrottle = (callback: Func, delay: number = 100) => {
    const throttleRef = useRef(false)

    return useCallback(() => {
        if (!throttleRef.current) {
            callback()
            throttleRef.current = true

            setTimeout(() => { throttleRef.current = false }, delay)
        }
    }, [])
}
