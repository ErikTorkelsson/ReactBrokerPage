import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = {
    listingBidders: [],
    status: 'idle',
    error: null
};

export const fetchListingBidders = createAsyncThunk('listingBidders/fetchListingBidders', async () => {  
    const response = await client.get('https://realtyfirmapi2.azurewebsites.net/api/listingbidders')    
    return response
});

const listingBiddersSlice = createSlice({
    name: 'listingbidders',
    initialState,
    reducers: {},
    extraReducers:
        {
            [fetchListingBidders.pending]: (state, action) =>
            {
                state.status = 'loading';
            },
            [fetchListingBidders.fulfilled]: (state, action) =>
            {
                state.listings = [];
                state.status = 'succeeded';
                state.listingBidders = state.listingBidders.concat(action.payload);
            },
            [fetchListingBidders.rejected]: (state, action) =>
            {
                state.status = 'failed';
                state.error = action.error.message;
            },
            
        }
});

export default listingBiddersSlice.reducer;