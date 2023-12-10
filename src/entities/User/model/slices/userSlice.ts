import { createSlice } from '@reduxjs/toolkit'
import { type IUserState } from '../types'

const initialState: IUserState = {
    value: 0
}

export const {
    reducer: userReducer,
    actions: {}
} = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment (state) {
            state.value++
        },
        decrement (state) {
            state.value--
        }
    }
})
