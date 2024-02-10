import { useSelector } from 'react-redux';
import { type IStateSchema } from '../../../app/providers/StoreProvider/config/stateSchema';

type TSelector<T, Args extends any[]> = (state: IStateSchema, ...args: Args) => T;
type THook<T, Args extends any[]> = (...args: Args) => T;
type TResult<T, Args extends any[]> = [THook<T, Args>, TSelector<T, Args>];

export function buildSelector<T, Args extends any[]>(selector: TSelector<T, Args>): TResult<T, Args> {
    const useSelectorHook: THook<T, Args> = (...args: Args) => {
        return useSelector((state: IStateSchema) => selector(state, ...args));
    };

    return [useSelectorHook, selector];
}
