import { configureStore } from '@reduxjs/toolkit';
import listingsReducer from '../features/listings/listingsSlice';
import biddersReducer from '../features/bidders/biddersSlice'
import listingBiddersReducer from '../features/listingbidders/listingBiddersSlice'
import loginReducer from '../features/login/loginSlice'
import { connect } from 'react-redux';
import { client } from '../api/client';

export const store = configureStore({
  reducer: {
    listings: listingsReducer,
    bidders: biddersReducer,
    listingBidders: listingBiddersReducer,
    login: loginReducer
  },
});


