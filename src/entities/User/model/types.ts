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
}

export interface IUserState {
    authData?: IUser;
    isInit: boolean;
}
