import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllListings, fetchListings } from './listingsSlice'
import { Link } from "react-router-dom";

const ListingsList = () => {
    const dispatch = useDispatch();
    const listings = useSelector(selectAllListings);

    const listingStatus = useSelector(state => state.listings.status)
    const token = useSelector(state => state.login.token);

    useEffect(() => {
        if (listingStatus === 'idle') {
          dispatch(fetchListings())
        }
    }, [listingStatus, dispatch])

    return(
        <div class="container mt-3">
            <ul class="list-group">
                {listings.map(listing => (
                    <li class="list-group-item" key={listing.id}>
                        <p>{listing.address}</p>
                        <Link class="btn btn-secondary" to={`/listings/${listing.listing_Id}`}>Visa</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ListingsList;