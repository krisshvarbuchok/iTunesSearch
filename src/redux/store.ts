import { configureStore } from '@reduxjs/toolkit';
import requestSlice from './slice//requestSlice';
import isActiveRequestSlice from './slice/isActiveRequestSlice';
import listSlice from './slice/listSlice';


export const store = configureStore({
    reducer: {
        request: requestSlice,    
        isActiveRequest: isActiveRequestSlice,
        list: listSlice,
    }
})


export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;