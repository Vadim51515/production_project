import { type ISharedState } from '../../../app/providers/StoreProvider';

export interface ICommentFormState extends ISharedState {
    text?: string;
    error?: string;
}
