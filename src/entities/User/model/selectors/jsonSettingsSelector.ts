import { buildSelector } from '../../../../shared/lib/store';
import { type IJsonSettings } from '../jsonSettings';

export const [useJsonSettings, getJsonSettings] = buildSelector((state) => state.user.authData?.jsonSettings ?? {});
export const [useJsonSettingsByKey, getJsonSettingsByKey] = buildSelector(
    (state, key: keyof IJsonSettings) => state.user.authData?.jsonSettings?.[key],
);
