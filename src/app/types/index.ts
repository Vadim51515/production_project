import {
    type FC,
    type PropsWithChildren
} from 'react'

export type Func<Args extends any[] = never[], Return = void> = (...args: Args) => Return

export type CFC<P = unknown> = FC<PropsWithChildren<P>>

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
}

export interface IOption {
    value: string | number
    label: string | number
}

export type TOptions = IOption[]
