import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchListingBidders } from './listingBiddersSlice'
import { Link } from "react-router-dom";

const ListingBiddersList = ({match}) => {
    
    const {listingId} = match.params;

    const dispatch = useDispatch();
    
    const listingBidders = useSelector(state => state.listingBidders.listingBidders);

    const listingBiddersStatus = useSelector(state => state.listingBidders.status);

    let token = window.localStorage.getItem('token');

    useEffect(() => {
        if (listingBiddersStatus === 'idle') {
          dispatch(fetchListingBidders())
        }
    }, [listingBiddersStatus, dispatch]);

    const bidders = listingBidders.filter(listingBidder => listingBidder.listing.listing_Id === listingId)

    if(token){
        return(
            <div class="container mt-3">
                <ul class="list-group">
                    {bidders.map(item => (
                        <li class="list-group-item" key={item.bidder.id}>
                            <p>{item.bidder.first_Name + " " + item.bidder.last_Name}</p>
                            <Link class="btn btn-secondary" to={`/bidders/${item.bidder.bidder_Id}`}>Visa</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
    else{
        return(
            <div class="container mt-3">
                <h2>Du båste vara inloggad för att vida budgivare</h2>
            </div>
        )
    }

}

export default ListingBiddersList