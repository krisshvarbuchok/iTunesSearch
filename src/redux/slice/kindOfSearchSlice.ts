import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: string = 'all';

const kindOfSearchSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        changeKindOfSearch: (state, action: PayloadAction<string>) => {
            return state = action.payload;
        }
    }
})

export const { changeKindOfSearch } = kindOfSearchSlice.actions;
export default kindOfSearchSlice.reducer;