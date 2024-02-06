import { type IUser } from '../../User';

export interface IComment {
    id: string;
    user: IUser;
    text: string;
}
