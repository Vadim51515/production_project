import { useEffect } from 'react'
import { type Func } from '../../app/types'

export const useInitialEffect = (callback: Func) => {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
            callback()
        }
    }, [])
}
