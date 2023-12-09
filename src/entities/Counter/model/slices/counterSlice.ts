import { createSlice } from '@reduxjs/toolkit'

export interface ICounterState {
    value: number
}

const initialState: ICounterState = {
    value: 0
}

export const {
    reducer: counterReducer,
    actions: {
        increment,
        decrement
    }
} = createSlice({
    name: 'counter',
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
