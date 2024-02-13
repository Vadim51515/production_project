import { type Nullable } from '@vitest/utils';
import { type ISharedState } from '../../app/providers/StoreProvider';
import { type Contry, type Currency } from '../../shared/constants/common';

export interface IProfile {
    id: string;
    firstName?: string;
    surname?: string;
    patronymic?: string;
    age?: number;
    currency?: Currency;
    country?: Contry;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface IProfileState extends ISharedState {
    data?: IProfile;
    isReadonly: boolean;
    form: Nullable<Partial<IProfile>>;
}

export type TKeysProfile = keyof IProfile;
