import {createSlice, PayloadAction} from '@reduxjs/toolkit'


const initialState: string = '';

const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
       addRequest: (state, action:PayloadAction<string>) => {
        return state = action.payload;
       }
    }
})

export const {addRequest} = requestSlice.actions;
export default requestSlice.reducer;