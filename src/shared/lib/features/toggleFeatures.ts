import { type Func } from '../../../app/types';
import { type IFeaturesFlag } from '../../types';
import { getFeatureFlag } from './setGetFeatures';

interface ToggleFeaturesOptions<T> {
    name: keyof IFeaturesFlag;
    on: Func<[], T>;
    off: Func<[], T>;
}

export function toggleFeatures<T>({ off, on, name }: ToggleFeaturesOptions<T>): T {
    if (getFeatureFlag(name)) {
        return on();
    }

    return off();
}
