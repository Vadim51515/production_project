import { type IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema';
import { buildSelector } from '../../../../shared/lib/store';

export const counterSelector = (state: IStateSchema) => state.counter;

export const [useCounterValue, getCounterValue] = buildSelector((state) => state.counter.value);
