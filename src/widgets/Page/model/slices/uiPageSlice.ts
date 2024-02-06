import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RuntimeStatuses } from '../../../../shared/constants/common';
import { type IUIPageState } from '../types';

const initialState: IUIPageState = {
    status: RuntimeStatuses.BeforeInitial,
    scroll: {},
};

export const { reducer: uiPageReducer, actions: uiPageSliceActions } = createSlice({
    name: 'uiPage',
    initialState,
    reducers: {
        setScrollPosition(state, { payload }: PayloadAction<{ path: string; position: number }>) {
            state.scroll[payload.path] = payload.position;
        },
    },
});
