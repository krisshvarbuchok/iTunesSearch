import axios from "axios"
import { createAppAsyncThunk } from "../../hooks/hools"
import { createSlice } from "@reduxjs/toolkit"


type ApiResponse = {
    results: ListType[];
    resultCount: number;
  }
 
  const getRequest = async (request: string, media: string): Promise<ApiResponse> => {
    try {
      const response = await axios.get<ApiResponse>(`${import.meta.env.VITE_API_BASE_URL}term=${request}&media=${media}`);
      console.log(`${import.meta.env.VITE_API_BASE_URL}term=${request}&media=music`);
      
      return response.data;
    } catch (error) {
      console.error("Ошибка API запроса:", error);
      throw error;
    }
  };
const getRequestAsync = createAppAsyncThunk<ListType[], { request: string, media: string }>(
    'request/getRequestAsync',
    async ({ request, media }, { rejectWithValue }) => {
        try {
            const data = await getRequest(request, media);
            console.log('data', data.results);
            return data.results;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);



type ListType = {
    artistName: string;
    artworkUrl30: string;
    artworkUrl60: string;
    artworkUrl100: string;
    collectionExplicitness: string;
    collectionHdPrice: number;
    collectionPrice: number;
    contentAdvisoryRating: string;
    country: string;
    currency: string;
    hasITunesExtras: boolean;
    kind: string;
    longDescription: string;
    previewUrl: string;
    primaryGenreName: string;
    releaseDate: string;
    shortDescription: string;
    trackCensoredName: string;
    trackExplicitness: string;
    trackHdPrice: number;
    trackHdRentalPrice: number;
    trackId: number;
    trackName: string;
    trackPrice: number;
    trackRentalPrice: number;
    trackTimeMillis: number;
    trackViewUrl: string;
    wrapperType: string;
}

const initialState = {
    list: null as ListType[] | null,
    isLoading: false,
    error: null as string | null,
}

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRequestAsync.fulfilled, (state, action) => {
                //console.log('action.payload', action.payload);

                state.list = action.payload;
            })
    }
})


export { getRequestAsync }
export default listSlice.reducer;