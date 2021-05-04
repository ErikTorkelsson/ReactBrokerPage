import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = {
    bidders: [],
    status: 'idle',
    error: null
};

export const fetchBidders = createAsyncThunk('bidders/fetchBidders', async (props) => {
    console.log(props) 
    const response = await client.get('https://realtyfirmapi2.azurewebsites.net/api/bidders')
    // {token : props}    
    return response
});

const biddersSlice = createSlice({
    name: 'bidders',
    initialState,
    reducers: {},
    extraReducers:
        {
            [fetchBidders.pending]: (state, action) =>
            {
                state.status = 'loading';
            },
            [fetchBidders.fulfilled]: (state, action) =>
            {
                state.bidders = [];
                state.status = 'succeeded';
                state.bidders = state.bidders.concat(action.payload);
            },
            [fetchBidders.rejected]: (state, action) =>
            {
                state.status = 'failed';
                state.error = action.error.message;
            },
            
        }
});

export default biddersSlice.reducer;

export const selectAllBidders = state => state.bidders.bidders;

export const selectBidderById = (state, bidderId) =>
  state.bidders.bidders.find(bidder => bidder.bidder_Id === bidderId);