import { configureStore } from '@reduxjs/toolkit';
import requestSlice from './slice//requestSlice';
import isActiveRequestSlice from './slice/isActiveRequestSlice';
import listSlice from './slice/listSlice';
import mediaRequestSlice from './slice/mediaRequestSlice';


export const store = configureStore({
    reducer: {
        request: requestSlice,    
        isActiveRequest: isActiveRequestSlice,
        list: listSlice,
        media: mediaRequestSlice,
    }
})


export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;