import { type IFeaturesFlag } from '../../types';

let featuresFlags: IFeaturesFlag;

export const setFeatureFlags = (newFeaturesFlags?: IFeaturesFlag) => {
    if (newFeaturesFlags) {
        featuresFlags = newFeaturesFlags;
    }
};

export const getFeatureFlag = (featureFlagName: keyof IFeaturesFlag) => {
    return featuresFlags[featureFlagName];
};
