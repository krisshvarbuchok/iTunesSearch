import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: string = '';

const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        addRequest: (_, action: PayloadAction<string>) => {
            return action.payload;
        },
        removeRequest: () => {
            return ''
        }
    }
})

export const { addRequest, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;