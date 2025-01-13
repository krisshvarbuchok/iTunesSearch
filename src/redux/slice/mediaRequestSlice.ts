import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState : string = 'all';

const mediaRequestSlice = createSlice({
    name: 'media',
    initialState,
    reducers: {
        changeMediaRequest: (_, action: PayloadAction<string>) => {
            return action.payload;
        }
    },

})

export const { changeMediaRequest } = mediaRequestSlice.actions;
export default mediaRequestSlice.reducer;