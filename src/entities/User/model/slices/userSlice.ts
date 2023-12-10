import { createSlice } from '@reduxjs/toolkit'
import { type IUserState } from '../types'

const initialState: IUserState = {}

export const {
    reducer: userReducer,
    actions: {}
} = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment (state) {
        },
        decrement (state) {
        }
    }
})
