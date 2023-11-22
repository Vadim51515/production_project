import {
    type FC,
    type ReactNode
} from 'react'

export interface CFC extends FC<{ children: ReactNode }> {}
