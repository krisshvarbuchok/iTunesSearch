import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: string = 'all';

const kindOfSearchSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        changeKindOfSearch: (_, action: PayloadAction<string>) => {
            return action.payload;
        }
    }
})

export const { changeKindOfSearch } = kindOfSearchSlice.actions;
export default kindOfSearchSlice.reducer;