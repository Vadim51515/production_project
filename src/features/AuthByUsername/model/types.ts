import { type ISharedState } from '../../../app/providers/StoreProvider';

export interface ILoginState extends ISharedState {
    username: string;
    password: string;
    isLoading?: boolean;
}
