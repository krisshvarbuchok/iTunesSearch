import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: string = 'search';

const isActiveButtonSlice = createSlice({
    name: 'isActiveRequest',
    initialState,
    reducers: {
        changeActiveButton: (state, action: PayloadAction<string>) => {
            return state = action.payload;
        }
    }
})
export const { changeActiveButton } = isActiveButtonSlice.actions;
export default isActiveButtonSlice.reducer;