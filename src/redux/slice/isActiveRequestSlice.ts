import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState : boolean = false;

const isActiveRequestSlice = createSlice({
    name: 'isActiveRequest',
    initialState,
    reducers: {
        isActiveRequest: (state, action: PayloadAction<boolean>) =>{
            console.log(action.payload);
            
            return state = action.payload;
        }
    }
})
export const {isActiveRequest} = isActiveRequestSlice.actions;
export default isActiveRequestSlice.reducer;