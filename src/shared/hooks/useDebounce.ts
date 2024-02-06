import { useCallback, useRef } from 'react';
import { type Func } from '../../app/types';

export const useDebounce = (callback: Func, delay: number) => {
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    return useCallback(() => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback();
        }, delay);
    }, [callback, delay]);
};
