import {
    createSlice
} from '@reduxjs/toolkit'
import { RuntimeStatuses } from '../../../../shared/const/common'
import { type IProfileState } from '../../types'

const initialState: IProfileState = {
    isReadonly: true,
    status: RuntimeStatuses.BeforeInitial
}

export const {
    reducer: profileReducer,
    actions: profileActions
} = createSlice({
    name: 'profile',
    initialState,
    reducers: {}
})
