import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: string = '';

const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        addRequest: (state, action: PayloadAction<string>) => {
            return state = action.payload;
        },
        removeRequest: (state) => {
            return state = ''
        }
    }
})

export const { addRequest, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;