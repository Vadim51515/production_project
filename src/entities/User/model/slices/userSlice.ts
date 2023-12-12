import {
    createSlice,
    type PayloadAction
} from '@reduxjs/toolkit'
import { USER_LOCAL_STORAGE_KEY } from '../../../../shared/const/localStorage'
import {
    type IUser,
    type IUserState
} from '../types'

const initialState: IUserState = {}

export const {
    reducer: userReducer,
    actions: userActions
} = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData (state, { payload }: PayloadAction<IUser>) {
            state.authData = payload
        },

        initAuthData (state) {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY)
            if (user) {
                state.authData = JSON.parse(user)
            }
        },

        logout (state) {
            state.authData = undefined
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
        }

    }
})
