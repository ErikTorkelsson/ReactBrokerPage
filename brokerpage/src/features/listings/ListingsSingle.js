import React from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { selectListingById, deleteListing } from './listingsSlice'
import { Link } from "react-router-dom";

const ListingsSingle = ({match}) => {
    const {listingId} = match.params;

    const dispatch = useDispatch();

    const listing = useSelector(state => selectListingById(state, listingId))
    let token = useSelector(state => state.login.token);

    if (!listing) {
        return (
          <section>
            <h2>listing not found!</h2>
          </section>
        )
    }

    const handleClick = () => {
        dispatch(deleteListing(listingId))
    };

    return(
        <div class="container mt-3">
            {listing.images.map(image => (
                <img src={image.image_url} alt="image" class="img-thumbnail" style={{ height: 200 }}/>
            ))}
            <p>Adress: {listing.address}</p>
            <p>Antal rum: {listing.room_Count}</p>
            <p>Byggår: {listing.year_Built}</p>
            <p>Bostadstyp: {listing.listing_Type}</p>
            <p>Boarea: {listing.floor_Area}</p>
            <p>Biarea: {listing.nonusable_Floor_Area}</p>
            <p>Tomtarea: {listing.lot_Area}</p>
            <p>Upplåtelseform: {listing.form_Of_Lease}</p>
            <p>Visningsdatum: {listing.tour_Date}</p>
            <p>Utgångspris: {listing.listing_Price}</p>
            <Link class="btn btn-secondary m-2" to={`/listingbidders/${listingId}`}>Visa Budgivare</Link>
            <Link class="btn btn-secondary m-2" to={`/putlisting/${listingId}`}>Ändra</Link>
            <button class="btn btn-secondary m-2" onClick={handleClick}>Radera bostad</button>
        </div>
    )
};

export default ListingsSingle;