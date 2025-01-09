import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState : string = 'all';

const mediaRequestSlice = createSlice({
    name: 'media',
    initialState,
    reducers: {
        changeMediaRequest: (state, action: PayloadAction<string>) => {
            return state = action.payload;
        }
    },

})

export const { changeMediaRequest } = mediaRequestSlice.actions;
export default mediaRequestSlice.reducer;