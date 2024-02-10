import { type IFeaturesFlag } from '../../../shared/types';

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
}

export interface IUserState {
    authData?: IUser;
    isInit: boolean;
}
