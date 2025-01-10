import { configureStore } from '@reduxjs/toolkit';
import requestSlice from './slice//requestSlice';
import isActiveButtonSlice from './slice/isActiveButtonSlice';
import listSlice from './slice/listSlice';
import mediaRequestSlice from './slice/mediaRequestSlice';
import kindOfSearchSlice from './slice/kindOfSearchSlice';


export const store = configureStore({
    reducer: {
        request: requestSlice,    
        isActiveButton: isActiveButtonSlice,
        list: listSlice,
        media: mediaRequestSlice,
        kindOfSearch: kindOfSearchSlice,
    }
})


export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;