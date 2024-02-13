import { type FC, type ReactElement } from 'react';
import { type IFeaturesFlag } from '../../../types';
import { getFeatureFlag } from '../setGetFeatures';

interface IToggleFeaturesProps {
    feature: keyof IFeaturesFlag;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures: FC<IToggleFeaturesProps> = ({ feature, on, off }) => {
    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
};
