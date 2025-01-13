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
        return response.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            throw {
                message: error.message,
                status: error.response?.status,
                data: error.response?.data,
            };
        }
        throw { message: "Unexpected error occurred", originalError: error };
    }
};
const getRequestAsync = createAppAsyncThunk<ListType[], { request: string, media: string }>(
    'request/getRequestAsync',
    async ({ request, media }, { rejectWithValue }) => {
        try {
            const data = await getRequest(request, media);
            return data.results;
        } catch (error: any) {
            return rejectWithValue(error.data || error.message || "An unexpected error occurred");
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
    collectionName?: string;
    collectionViewUrl?: string;
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
    collectionId?: number;
}

const initialState = {
    list: null as ListType[] | null,
    isLoading: false,
    error: null as string | null | undefined,
}

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRequestAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getRequestAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.list = action.payload;
            })
            .addCase(getRequestAsync.rejected, (state, action) => {
                console.error("Ошибка при загрузке данных:", action.payload);
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})


export { getRequestAsync }
export default listSlice.reducer;