import {
    type FC,
    type PropsWithChildren
} from 'react'

export type Func<Args extends any[] = never[], Return = void> = (...args: Args) => Return

export type CFC<P = unknown> = FC<PropsWithChildren<P>>
