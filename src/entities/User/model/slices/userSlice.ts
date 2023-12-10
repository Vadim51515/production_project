import { createSlice } from '@reduxjs/toolkit'
import { type IUserState } from '../types'

const initialState: IUserState = {}

export const {
    reducer: userReducer,
    // eslint-disable-next-line no-empty-pattern
    actions: {}
} = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment () {
        },
        decrement () {
        }
    }
})
