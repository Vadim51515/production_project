import {
    FC,
    PropsWithChildren,
} from 'react';

export type Func<Args extends Array<any> = Array<never>, Return = void> = (...args: Args) => Return;

export type CFC<P = unknown> = FC<PropsWithChildren<P>>;