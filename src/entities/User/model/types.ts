import { type IFeaturesFlag } from '../../../shared/types';
import { type IJsonSettings } from './jsonSettings';

export enum UserRole {
    Admin = 'admin',
    User = 'user',
    Manager = 'manager',
}

export interface IUser {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: IFeaturesFlag;
    jsonSettings?: IJsonSettings;
}

export interface IUserState {
    authData?: IUser;
    isInit: boolean;
}
