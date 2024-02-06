import type { IStateSchema } from '../../../../app/providers/StoreProvider/config/stateSchema';

export const addCommentFormTextSelector = (state: IStateSchema) => state.addCommentForm?.text;
export const addCommentErrorSelector = (state: IStateSchema) => state.addCommentForm?.error;
