import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: string = 'search';

const isActiveButtonSlice = createSlice({
    name: 'isActiveRequest',
    initialState,
    reducers: {
        changeActiveButton: (_, action: PayloadAction<string>) => {
            return action.payload;
        }
    }
})
export const { changeActiveButton } = isActiveButtonSlice.actions;
export default isActiveButtonSlice.reducer;