export interface IUser {
    id: number
    username: string
    avatar?: string
}

export interface IUserState {
    authData?: IUser
    isInit: boolean
}
